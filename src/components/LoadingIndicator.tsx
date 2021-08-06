import React from 'react'
import { makeStyles } from '@material-ui/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

type Props = { classes: ReturnType<typeof useStyles> }

const Component = ({ classes }: Props): JSX.Element => {
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  )
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

const Container = (): JSX.Element => {
  const classes = useStyles()
  return <Component classes={classes} />
}

export { Container as LoadingIndicator }
