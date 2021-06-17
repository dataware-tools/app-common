import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  dialogTitle: {
    alignItems: 'center',
    display: 'flex',
    fontSize: '1.3rem',
    padding: '1vh 0'
  }
})

type ContainerProps = { children: ReactNode }

const Container = ({ children }: ContainerProps): JSX.Element => {
  const classes = useStyles()
  return <div className={classes.dialogTitle}>{children}</div>
}

export { Container as DialogSubTitle }
export type { ContainerProps as DialogSubTitleProps }
