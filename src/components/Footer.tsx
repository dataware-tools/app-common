import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import themeInstance from 'theme'
import Link from '@material-ui/core/Link'
import Divider from '@material-ui/core/Divider'

type Props = {
  classes: ReturnType<typeof useStyles>
} & ContainerProps

type ContainerProps = {
  repository: string
}

const Component = ({ classes, repository }: Props): JSX.Element => {
  return (
    <div className={classes.footer}>
      <Divider variant='middle' sx={{ mt: '3vh', mb: '1vh' }} />
      <div className={classes.footerBody}>
        <div className={classes.leftContainer}>
          <Link
            variant='body2'
            color='inherit'
            href='http://www.hdwlab.co.jp'
            target='_blank'
            rel='noopener noreferrer'
          >
            &copy; Human Dataware Lab.
          </Link>
        </div>
        <div className={classes.rightContainer}>
          <Link
            variant='body2'
            color='inherit'
            href={repository}
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme: typeof themeInstance) => ({
  footer: {
    color: theme.palette.text.secondary,
    marginLeft: '10vw',
    marginRight: '10vw'
  },
  footerBody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftContainer: {
    flex: 1
  },
  rightContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end'
  }
}))

const Container = ({ ...delegated }: ContainerProps): JSX.Element => {
  const classes = useStyles()
  return <Component classes={classes} {...delegated} />
}

export { Container as Footer }
export type { ContainerProps as FooterProps }
