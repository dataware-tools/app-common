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
    <div>
      <div className={classes.toolsContainer}>{children}</div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  toolsContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    overflowX: 'auto'
  }
}))

const Container = ({ ...delegated }: ContainerProps): JSX.Element => {
  const classes = useStyles()
  return <Component classes={classes} {...delegated} />
}

export { Container as ToolBar }
export type { ContainerProps as ToolBarProps }
