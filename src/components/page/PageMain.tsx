import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Box, { BoxProps } from '@material-ui/core/Box'

type Props = BoxProps

const useStyles = makeStyles(() => ({
  pageMain: {
    flex: 1,
    overflow: 'auto'
  }
}))

const Component = ({
  children,
  className,
  ...delegated
}: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <Box className={`${classes.pageMain} ${className}`} {...delegated}>
      {children}
    </Box>
  )
}

export { Component as PageMain }
export type { Props as PageMainProps }
