import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
  classes: ReturnType<typeof useStyles>
} & ContainerProps

type ContainerProps = {
  right?: React.ReactNode
  left?: React.ReactNode
}

const Component = ({ classes, right, left }: Props): JSX.Element => {
  return (
    <div className={classes.toolsContainer}>
      <div className={classes.left}>{left}</div>
      <div className={classes.right}>{right}</div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  toolsContainer: {
    alignItems: 'center',
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'space-between'
  },
  left: {
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left'
  },
  right: {
    alignItems: 'center',
    display: 'flex',
    textAlign: 'right'
  }
}))

const Container = ({ ...delegated }: ContainerProps): JSX.Element => {
  const classes = useStyles()
  return <Component classes={classes} {...delegated} />
}

export { Container as ToolBar }
export type { ContainerProps as ToolBarProps }
