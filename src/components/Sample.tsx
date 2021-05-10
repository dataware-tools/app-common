import React from 'react'
import themeInstance from 'theme'
import { makeStyles } from '@material-ui/core/styles'

type Props = { classes: ReturnType<typeof useStyles> } & ContainerProps

type ContainerProps = {
  sample: string
}

const Component = ({ classes, sample }: Props): JSX.Element => {
  return (
    <div role='main' className={classes.sample}>
      {sample}
    </div>
  )
}

const useStyles = makeStyles((theme: typeof themeInstance) => ({
  sample: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))

const Container = ({ ...delegated }: ContainerProps): JSX.Element => {
  const classes = useStyles()
  return <Component classes={classes} {...delegated} />
}

export { Container as Sample }
export type { ContainerProps as SampleProps }
