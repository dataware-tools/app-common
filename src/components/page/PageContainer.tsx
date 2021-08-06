import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Box, { BoxProps } from '@material-ui/core/Box'

type Props = BoxProps

const useStyles = makeStyles({
  pageContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    overflow: 'auto'
  }
})

const Component = ({
  children,
  className,
  ...delegated
}: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <Box className={`${classes.pageContainer} ${className}`} {...delegated}>
      {children}
    </Box>
  )
}

export { Component as PageContainer }
export type { Props as PageContainerProps }
