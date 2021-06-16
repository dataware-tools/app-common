import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'

type Props = { children: ReactNode; height?: string; maxHeight?: string }

const useStyles = makeStyles({
  div: {
    display: 'flex',
    flexDirection: 'column',
    height: (props: Props) => (props.height ? props.height : '100%'),
    maxHeight: (props: Props) => (props.maxHeight ? props.maxHeight : '100%'),
    padding: '10px'
  }
})

const Component = ({ children, ...delegated }: Props): JSX.Element => {
  const classes = useStyles({ children, ...delegated })
  return <div className={classes.div}>{children}</div>
}

export { Component as DialogContainer }
export type { Props as DialogContainerProps }
