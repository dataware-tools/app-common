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
    <>
      <div className={classes.toolBar}>
        <span className={classes.span} />
        <div className={classes.toolsContainer}>{children}</div>
      </div>
    </>
  )
}

const useStyles = makeStyles(() => ({
  toolBar: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  span: {
    flex: 1
  },
  toolsContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 0,
    justifyContent: 'flex-end'
  }
}))

const Container = ({ ...delegated }: ContainerProps): JSX.Element => {
  const classes = useStyles()
  return <Component classes={classes} {...delegated} />
}

export { Container as ToolBar }
export type { ContainerProps as ToolBarProps }
