import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/styles'

type Props = { children: ReactNode; padding?: string }

const useStyles = makeStyles({
  pageBody: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: (props: Props) => props.padding || '3vw 5vw'
  }
})

const Component = ({ children, ...delegated }: Props): JSX.Element => {
  const classes = useStyles({ children, ...delegated })
  return <div className={classes.pageBody}>{children}</div>
}

export { Component as PageBody }
export type { Props as PageBodyProps }
