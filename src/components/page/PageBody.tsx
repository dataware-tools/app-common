import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box, { BoxProps } from '@material-ui/core/Box'

type Props = BoxProps

const useStyles = makeStyles({
  pageBody: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: '3vw 5vw'
  }
})

const Component = ({
  children,
  className,
  ...delegated
}: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <Box className={`${classes.pageBody} ${className}`} {...delegated}>
      {children}
    </Box>
  )
}

export { Component as PageBody }
export type { Props as PageBodyProps }
