import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Alert from '@material-ui/core/Alert'
import AlertTitle from '@material-ui/core/AlertTitle'

type Props = {
  classes: ReturnType<typeof useStyles>
} & ContainerProps

type ContainerProps = {
  reason?: string
  instruction?: string
}

const useStyles = makeStyles(() => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    overflow: 'auto',
    width: '100%'
  }
}))

const Component = ({ reason, instruction, classes }: Props): JSX.Element => {
  return (
    <div className={classes.root}>
      <Alert severity='error'>
        <AlertTitle>Error</AlertTitle>
        {reason ? <div>{reason}</div> : null}
        {instruction ? (
          <div>
            <strong>{instruction}</strong>
          </div>
        ) : null}
      </Alert>
    </div>
  )
}

const Container = ({ ...delegated }: ContainerProps): JSX.Element => {
  const classes = useStyles()
  return <Component classes={classes} {...delegated} />
}

export { Container as ErrorMessage }
export type { ContainerProps as ErrorMessageProps }
