import React from 'react'
import { makeStyles } from '@material-ui/styles'

type Props = { classes: ReturnType<typeof useStyles> } & ContainerProps

type ContainerProps = {
  children: string
}

const Component = ({ classes, children }: Props): JSX.Element => {
  return <span className={classes.span}>{children}</span>
}

const useStyles = makeStyles({
  span: {
    fontFamily: [
      'Oxanium',
      'Helvetica Neue',
      'Arial',
      'Helvetica',
      'Roboto',
      'Noto Sans JP',
      'sans-serif'
    ].join(',')
  }
})

const Container = ({ ...delegated }: ContainerProps): JSX.Element => {
  const classes = useStyles()
  return <Component classes={classes} {...delegated} />
}

export { Container as NoticeableLetters }
export type { ContainerProps as NoticeableLettersProps }
