import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
  classes: ReturnType<typeof useStyles>
} & ContainerProps

type ContainerProps = {
  children: React.ReactNode
}

const Component = ({ classes, children }: Props): JSX.Element => {
  return (
    <div className={classes.toolsContainer}>
      <span style={{ flex: 1 }} />
      {children}
    </div>
  )
}

const useStyles = makeStyles(() => ({
  toolsContainer: {
    alignItems: 'center',
    display: 'flex',
    flexShrink: 0,
    textAlign: 'right'
  }
}))

const Container = ({ ...delegated }: ContainerProps): JSX.Element => {
  const classes = useStyles()
  return <Component classes={classes} {...delegated} />
}

export { Container as ToolBar }
export type { ContainerProps as ToolBarProps }
