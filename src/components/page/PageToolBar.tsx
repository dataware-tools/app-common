import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { ToolBar, ToolBarProps } from '../ToolBar'

type Props = ToolBarProps

const useStyles = makeStyles(() => ({
  pageToolBar: {
    overflow: 'auto',
    padding: '0 0 3vh 0'
  }
}))

const Component = ({ ...delegated }: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes.pageToolBar}>
      <ToolBar {...delegated} />
    </div>
  )
}

export { Component as PageToolBar }
export type { Props as PageToolBarProps }
