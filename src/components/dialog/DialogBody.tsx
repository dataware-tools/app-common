import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Box, { BoxProps } from '@material-ui/core/Box'

type Props = BoxProps

const useStyles = makeStyles(() => ({
  dialogBody: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: '0 2vw'
  }
}))

const Component = ({
  children,
  className,
  ...delegated
}: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <Box className={`${classes.dialogBody} ${className}`} {...delegated}>
      {children}
    </Box>
  )
}
export { Component as DialogBody }
export type { Props as DialogBodyProps }
