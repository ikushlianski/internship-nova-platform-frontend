import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const googleToken = req.cookies.get("googleToken");

  let tokenData;

  if (googleToken) {
    // TODO Use `jwt.verify` as we know the secret on the backend here in the middleware
    tokenData = parseJwtOnServer(googleToken.value.toString());

    console.log("tokenData", tokenData);
  }

  if (isPrivateRoute(req.nextUrl.pathname)) {
    if (tokenData) {
      console.log(
        `Entering private route ${req.nextUrl.pathname} with token data`,
        tokenData,
      );

      return NextResponse.next();
    }

    console.log(
      `Cannot enter private route ${
        req.nextUrl.pathname
      } without a valid token`,
    );

    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/oauth")) {
    const opaqueJwtToken = req.nextUrl.searchParams.get("token") || "";

    if (opaqueJwtToken.length > 0) {
      const response = NextResponse.redirect(new URL("/private", req.url));

      const COOKIE_DAYS_VALID = 30;

      response.cookies.set("googleToken", opaqueJwtToken.toString(), {
        maxAge: 60 * 60 * 24 * COOKIE_DAYS_VALID,
        httpOnly: true,
      });

      return response;
    }
  } else {
    return NextResponse.next();
  }

  return NextResponse.next();
}

function parseJwtOnServer(token: string) {
  const parsedToken = token.split(".")[1];
  if (parsedToken) {
    try {
      return JSON.parse(atob(parsedToken));
    } catch (e) {
      return null;
    }
  }
}

// listing private routes as there will only be a couple of them, most of the others will be public
function isPrivateRoute(pathname: string) {
  return ["/private", "/logout"].includes(pathname);
}
