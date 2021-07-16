import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/styles'

type Props = { children: ReactNode }

const useStyles = makeStyles(() => ({
  dialogMain: {
    flex: 1,
    overflow: 'auto'
  }
}))

const Component = ({ children }: Props): JSX.Element => {
  const classes = useStyles()
  return <div className={classes.dialogMain}>{children}</div>
}

export { Component as DialogMain }
export type { Props as DialogMainProps }
