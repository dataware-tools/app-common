import React from 'react'
import Alert from '@material-ui/core/Alert'
import AlertTitle from '@material-ui/core/AlertTitle'
import Box from '@material-ui/core/Box'

type Props = ContainerProps

type ContainerProps = {
  reason?: string
  instruction?: string
}

const Component = ({ reason, instruction }: Props): JSX.Element => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        overflow: 'auto',
        width: '100%'
      }}
    >
      <Alert severity='error'>
        <AlertTitle>Error</AlertTitle>
        {reason ? <div>{reason}</div> : null}
        {instruction ? (
          <div>
            <strong>{instruction}</strong>
          </div>
        ) : null}
      </Alert>
    </Box>
  )
}

const Container = ({ ...delegated }: ContainerProps): JSX.Element => {
  return <Component {...delegated} />
}

export { Container as ErrorMessage }
export type { ContainerProps as ErrorMessageProps }
