import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { useAuth0 } from '@auth0/auth0-react'
import { LoadingIndicator } from '../LoadingIndicator'
import { ErrorMessage } from '../ErrorMessage'
import { makeStyles } from '@material-ui/core/styles'

export type ContainerProps = {
  children: JSX.Element | JSX.Element[] | string
  repository: string
}

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
  }
}))

const Container = ({ children, repository }: ContainerProps): JSX.Element => {
  const styles = useStyles()
  const { isLoading, error } = useAuth0()
  if (isLoading) {
    return (
      <div className={styles.loadingIndicatorContainer}>
        <LoadingIndicator />
      </div>
    )
  }
  if (error) {
    return (
      <div className={styles.errorMessageContainer}>
        <ErrorMessage reason={error.message} />
      </div>
    )
  }
  return (
    <div>
      <Header />
      {children}
      <Footer repository={repository} />
    </div>
  )
}

export { Container as PageWrapper }
export type { ContainerProps as PageWrapperProps }
