import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/styles'

type Props = {
  children: ReactNode
  height?: string
  maxHeight?: string
  padding?: string
}

const useStyles = makeStyles({
  dialogContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: (props: Props) => (props.height ? props.height : '100%'),
    maxHeight: (props: Props) => (props.maxHeight ? props.maxHeight : '100%'),
    padding: (props: Props) => (props.padding ? props.padding : '0')
  }
})

const Component = ({ children, ...delegated }: Props): JSX.Element => {
  const classes = useStyles({ children, ...delegated })
  return <div className={classes.dialogContainer}>{children}</div>
}

export { Component as DialogContainer }
export type { Props as DialogContainerProps }
