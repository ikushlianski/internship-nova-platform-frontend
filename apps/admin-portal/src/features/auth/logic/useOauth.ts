import { useCallback } from "react";

export const useOauth = () => {
  const handelGoogleSignIn = useCallback(() => {
    const requestData = {
      redirect_uri: "http://localhost:3000/api/v1/auth/google/callback",
      client_id:
        "634293760963-9e379hughfejbm4j6093mpoi2s6btsos.apps.googleusercontent.com",
      response_type: "token",
      scope: "email%20profile",
    };
    const url = `https://accounts.google.com/o/oauth2/auth?client_id=${requestData.client_id}&redirect_uri=${requestData.redirect_uri}&response_type=${requestData.response_type}&scope=${requestData.scope}`;
    window.location.assign(url);
  }, []);

  return {
    handelGoogleSignIn,
  };
};
