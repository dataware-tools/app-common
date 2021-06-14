import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ToolBar, ToolBarProps } from './ToolBar'

type Props = ToolBarProps

const useStyles = makeStyles(() => ({
  div: {
    overflow: 'auto',
    padding: '3vh 0'
  }
}))

const Component = ({ ...delegated }: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes.div}>
      <ToolBar {...delegated} />
    </div>
  )
}

export { Component as PageToolBar }
export type { Props as PageToolBarProps }
