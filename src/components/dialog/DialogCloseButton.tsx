import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/styles'
import themeInstance from '../../theme'
type ComponentProps = { onClick: () => void }
const useStyles = makeStyles((theme: typeof themeInstance) => ({
  root: {
    position: 'absolute',
    right: 15,
    top: -10
  },
  fixed: {
    alignItems: 'center',
    backgroundColor: 'white',
    border: `1px solid ${theme.palette.grey[600]}`,
    borderRadius: '50%',
    color: theme.palette.grey[600],
    cursor: 'pointer',
    display: 'flex',
    height: 30,
    justifyContent: 'center',
    position: 'fixed',
    width: 30
  }
}))
const Component = ({ onClick }: ComponentProps): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.fixed} onClick={onClick}>
        <CloseIcon />
      </div>
    </div>
  )
}

export { Component as DialogCloseButton }
export type { ComponentProps as DialogCloseButtonProps }
