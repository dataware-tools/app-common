import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
  children: ReactNode
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  padding?: string
}

const useStyles = makeStyles({
  pageContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '75vh',
    padding: (props: Props) => props.padding || '0'
  }
})

const Component = ({ children, ...delegated }: Props): JSX.Element => {
  const classes = useStyles({ children, ...delegated })
  return <div className={classes.pageContainer}>{children}</div>
}

export { Component as PageContainer }
export type { Props as PageContainerProps }
