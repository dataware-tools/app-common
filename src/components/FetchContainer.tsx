import React from 'react'
import { LoadingIndicator } from './LoadingIndicator'
import { ErrorMessage, ErrorMessageProps } from './ErrorMessage'

type Props = ContainerProps

type ContainerProps = {
  isFetchSuccess: boolean
  isFetchEnd: boolean
  errorMessage: ErrorMessageProps
  children: React.ReactNode
}

const Component = ({
  isFetchSuccess,
  isFetchEnd,
  errorMessage,
  children
}: Props): JSX.Element => {
  return (
    <>
      {isFetchSuccess ? (
        isFetchEnd ? (
          children
        ) : (
          <LoadingIndicator />
        )
      ) : (
        <ErrorMessage {...errorMessage} />
      )}
    </>
  )
}

const Container = ({ ...delegated }: ContainerProps): JSX.Element => {
  return <Component {...delegated} />
}

export { Container as FetchContainer }
export type { ContainerProps as FetchContainerProps }
