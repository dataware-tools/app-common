import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import themeInstance from 'theme'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Link from '@material-ui/core/Link'
import { useAuth0 } from '@auth0/auth0-react'

type Props = {
  classes: ReturnType<typeof useStyles>
  isAuthenticated: boolean
  onLogin: () => void
  onLogout: () => void
}

const Component = ({
  classes,
  isAuthenticated,
  onLogin,
  onLogout
}: Props): JSX.Element => {
  return (
    <>
      <AppBar className={classes.appBar} elevation={0} position='fixed'>
        <Toolbar className={classes.toolBar}>
          <div className={classes.leftContainer}>
            <Link href='/' color='inherit' className={classes.homeLink}>
              Dataware Tools
            </Link>
          </div>
          <div className={classes.rightContainer}>
            {!isAuthenticated ? (
              <Link
                color='inherit'
                className={classes.authLink}
                onClick={onLogin}
              >
                Login
              </Link>
            ) : (
              <Link
                color='inherit'
                className={classes.authLink}
                onClick={onLogout}
              >
                Logout
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

const useStyles = makeStyles((theme: typeof themeInstance) => ({
  appBar: {
    color: theme.palette.common.white
  },
  toolBar: {
    backgroundColor: theme.palette.common.black,
    justifyContent: 'space-between'
  },
  leftContainer: {
    flex: 1
  },
  rightContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end'
  },
  homeLink: {
    fontSize: '1.25rem'
  },
  authLink: {
    cursor: 'pointer'
  }
}))

const Container = (): JSX.Element => {
  const classes = useStyles()
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <Component
      classes={classes}
      isAuthenticated={isAuthenticated}
      onLogin={() => {
        loginWithRedirect({ redirectUri: window.location.href })
      }}
      onLogout={() => logout({ returnTo: window.location.origin })}
    />
  )
}

export { Container as Header }
