import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React from "react";
import { AUTH_CONFIG } from "./auth/config";
import { theme } from "./theme";

const authConfig = {
  domain: AUTH_CONFIG.domain,
  clientId: AUTH_CONFIG.clientId,
  apiUrl: AUTH_CONFIG.apiUrl,
};

const redirectUri = window.location.origin;

const onRedirectCallback = (appState?: AppState): void => {
  const nonQueryParamURL =
    appState && appState.returnTo ? appState.returnTo : window.location.origin;
  history.replaceState(null, "", nonQueryParamURL);
};

export const ComponentTestProvider: React.FC = ({ children }) => {
  return (
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      audience={authConfig.apiUrl}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Auth0Provider>
  );
};
