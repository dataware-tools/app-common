import { AppState, Auth0Provider } from "@auth0/auth0-react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { StylesProvider } from "@mui/styles";
import { render, RenderOptions } from "@testing-library/react";
import React from "react";
import { AUTH_CONFIG } from "./auth/config";
import { theme } from "./theme";

export const authConfig = {
  domain: process.env.JEST_AUTH0_DOMAIN || AUTH_CONFIG.domain,
  clientId: process.env.JEST_AUTH0_CLIENT_ID || AUTH_CONFIG.clientId,
  apiUrl: process.env.JEST_AUTH0_API_URL || AUTH_CONFIG.apiUrl,
};
export const redirectUri = window.location.origin;

export const onRedirectCallback = (appState: AppState): void => {
  const nonQueryParamURL =
    appState && appState.returnTo ? appState.returnTo : window.location.origin;
  history.replaceState(null, "", nonQueryParamURL);
};

export const TestAuthProvider: React.FC = ({ children }) => {
  return (
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      audience={authConfig.apiUrl}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

export const CONST_STORY_BOOK = {
  PARAM_SKIP_VISUAL_REGRESSION_TEST: { loki: { skip: true } },
};

export { customRender as render };
