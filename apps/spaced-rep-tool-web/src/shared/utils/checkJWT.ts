export function checkJWT(cookies: string): boolean {
  const isJwtPresent = !!cookies;
  // if (token is present in cookies) isJwtPresent = true;

  return isJwtPresent;
}
