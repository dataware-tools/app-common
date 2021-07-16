import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/styles'

type Props = { children: ReactNode; padding?: string }

const useStyles = makeStyles({
  dialogWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: (props: Props) => props.padding || '20px'
  }
})

const Component = ({ children, ...delegated }: Props): JSX.Element => {
  const classes = useStyles({ children, ...delegated })
  return <div className={classes.dialogWrapper}>{children}</div>
}

export { Component as DialogWrapper }
export type { Props as DialogWrapperProps }
