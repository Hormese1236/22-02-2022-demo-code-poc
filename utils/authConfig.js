// Config object to be passed to Msal on creation
export const msalConfig = {
  auth: {
    clientId: "3cc10cae-6afc-4a2d-b543-0e699059177d",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "http://localhost:3000",
    postLogoutRedirectUri: "/",
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
  scopes: [
    "User.Read",
    "Tasks.Read",
    "Tasks.Read.Shared",
    "Tasks.ReadWrite",
    "Tasks.ReadWrite.Shared",
  ],
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me/todo/lists",
};
