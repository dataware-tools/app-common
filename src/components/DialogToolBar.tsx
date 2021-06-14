import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ToolBar, ToolBarProps } from './ToolBar'

type Props = ToolBarProps

const useStyles = makeStyles(() => ({
  div: {
    padding: '2vh 1vw'
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

export { Component as DialogToolBar }
export type { Props as DialogToolBarProps }
