import { AUTH_CONFIG } from '../src/auth/config'

import { Auth0Provider } from '@auth0/auth0-react'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { StylesProvider } from '@material-ui/styles'
import theme from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen'
}
const redirectUri = window.location.origin

const onRedirectCallback = (appState) => {
  const nonQueryParamURL =
    appState && appState.returnTo ? appState.returnTo : window.location.origin
  history.replaceState(null, '', nonQueryParamURL)
}
export const decorators = [
  (story) => {
    return (
      <>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Auth0Provider
              domain={AUTH_CONFIG.domain}
              clientId={AUTH_CONFIG.clientId}
              audience={AUTH_CONFIG.apiUrl}
              redirectUri={redirectUri}
              onRedirectCallback={onRedirectCallback}
            >
              {story()}
            </Auth0Provider>
          </ThemeProvider>
        </StylesProvider>
      </>
    )
  }
]
