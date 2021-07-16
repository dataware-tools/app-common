import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/styles'

type Props = { children: ReactNode }

const useStyles = makeStyles(() => ({
  pageMain: {
    flex: 1,
    overflow: 'auto'
  }
}))

const Component = ({ children }: Props): JSX.Element => {
  const classes = useStyles()
  return <div className={classes.pageMain}>{children}</div>
}

export { Component as PageMain }
export type { Props as PageMainProps }
