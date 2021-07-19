import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { useAuth0 } from '@auth0/auth0-react'
import { LoadingIndicator } from '../LoadingIndicator'
import { ErrorMessage } from '../ErrorMessage'
import { makeStyles } from '@material-ui/core/styles'
import Box, { BoxProps } from '@material-ui/core/Box'

export type ContainerProps = {
  repository: string
} & BoxProps

const useStyles = makeStyles(() => ({
  loadingIndicatorContainer: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100vw'
  },
  errorMessageContainer: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100vw'
  },
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    // 100vh - Header size - Footer size
    height: 'calc(100vh - 64px - 55px)',
    width: '100vw'
  }
}))

const Container = ({
  children,
  repository,
  className,
  ...delegated
}: ContainerProps): JSX.Element => {
  const classes = useStyles()
  const { isLoading, error } = useAuth0()
  if (isLoading) {
    return (
      <div className={classes.loadingIndicatorContainer}>
        <LoadingIndicator />
      </div>
    )
  }
  if (error) {
    return (
      <div className={classes.errorMessageContainer}>
        <ErrorMessage reason={error.message} />
      </div>
    )
  }
  return (
    <div>
      <Header />
      <Box className={`${classes.pageWrapper} ${className}`} {...delegated}>
        {children}
      </Box>
      <Footer repository={repository} />
    </div>
  )
}

export { Container as PageWrapper }
export type { ContainerProps as PageWrapperProps }
