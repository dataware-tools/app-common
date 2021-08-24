import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Box, { BoxProps } from '@material-ui/core/Box'

type Props = BoxProps

const useStyles = makeStyles(() => ({
  dialogContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
}))

const Component = ({
  children,
  className,
  ...delegated
}: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <Box className={`${classes.dialogContainer} ${className}`} {...delegated}>
      {children}
    </Box>
  )
}

export { Component as DialogContainer }
export type { Props as DialogContainerProps }
