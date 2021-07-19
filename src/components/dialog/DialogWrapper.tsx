import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box, { BoxProps } from '@material-ui/core/Box'

type Props = BoxProps

const useStyles = makeStyles(() => ({
  dialogWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'
  }
}))

const Component = ({
  children,
  className,
  ...delegated
}: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <Box className={`${classes.dialogWrapper} ${className}`} {...delegated}>
      {children}
    </Box>
  )
}

export { Component as DialogWrapper }
export type { Props as DialogWrapperProps }
