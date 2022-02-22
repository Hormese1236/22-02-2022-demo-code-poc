import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../utils/authConfig";

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((e) => {
      console.error(e);
    });
  };

  return <button onClick={handleLogin}>Sign in</button>;
};
