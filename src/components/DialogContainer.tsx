import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'

type Props = { children: ReactNode; height?: string }

const useStyles = makeStyles({
  div: {
    display: 'flex',
    flexDirection: 'column',
    height: (props: Props) => (props.height ? props.height : '100%'),
    padding: '10px'
  }
})

const Component = ({ children, height }: Props): JSX.Element => {
  const classes = useStyles({ children, height })
  return <div className={classes.div}>{children}</div>
}

export { Component as DialogContainer }
export type { Props as DialogContainerProps }