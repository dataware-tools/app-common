import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import themeInstance from 'theme'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Link from '@material-ui/core/Link'
import { useAuth0 } from '@auth0/auth0-react'
import { NoticeableLetters } from './NoticeableLetters'

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
              <NoticeableLetters>Dataware Tool</NoticeableLetters>
            </Link>
          </div>
          <div className={classes.rightContainer}>
            {!isAuthenticated ? (
              <Link
                color='inherit'
                className={classes.authLink}
                onClick={onLogin}
              >
                <NoticeableLetters>Login</NoticeableLetters>
              </Link>
            ) : (
              <Link
                color='inherit'
                className={classes.authLink}
                onClick={onLogout}
              >
                <NoticeableLetters>Logout</NoticeableLetters>
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
  const redirectUri =
    typeof window === 'undefined' ? null : window.location.href
  const returnTo = typeof window === 'undefined' ? null : window.location.origin

  return (
    <Component
      classes={classes}
      isAuthenticated={isAuthenticated}
      onLogin={() => {
        // @ts-expect-error redirectUri is not null in client side
        loginWithRedirect({ redirectUri: redirectUri })
      }}
      // @ts-expect-error returnTO is not null in client side
      onLogout={() => logout({ returnTo: returnTo })}
    />
  )
}

export { Container as Header }
