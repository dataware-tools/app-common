import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/styles'

type Props = {
  children: ReactNode
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  padding?: string
}

const useStyles = makeStyles({
  dialogBody: {
    display: 'flex',
    flex: 1,
    flexDirection: (props: Props) => props.flexDirection || 'column',
    padding: (props: Props) => props.padding || '0 2vw'
  }
})

const Component = ({ children, ...delegated }: Props): JSX.Element => {
  const classes = useStyles({ children, ...delegated })
  return <div className={classes.dialogBody}>{children}</div>
}

export { Component as DialogBody }
export type { Props as DialogBodyProps }
