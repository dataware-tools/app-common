import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ToolBar, ToolBarProps } from '../ToolBar'

type Props = ToolBarProps

const useStyles = makeStyles(() => ({
  dialogToolBar: {
    padding: '2vh 0 0 0'
  }
}))

const Component = ({ ...delegated }: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes.dialogToolBar}>
      <ToolBar {...delegated} />
    </div>
  )
}

export { Component as DialogToolBar }
export type { Props as DialogToolBarProps }
