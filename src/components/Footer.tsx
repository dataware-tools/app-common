import React from 'react'
import Link from '@material-ui/core/Link'
import Divider from '@material-ui/core/Divider'
import { NoticeableLetters } from './NoticeableLetters'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'

type Props = ContainerProps

type ContainerProps = {
  repository: string
}

const Component = ({ repository }: Props): JSX.Element => {
  return (
    <>
      <AppBar
        position='sticky'
        sx={{ bottom: 0, backgroundColor: 'common.white' }}
        elevation={0}
      >
        <Box
          sx={{
            color: 'text.secondary',
            paddingBottom: '15px',
            paddingLeft: '10vw',
            paddingRight: '10vw'
          }}
        >
          <Divider variant='middle' sx={{ pt: '10px', pb: '5px' }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Link
                variant='body2'
                color='inherit'
                href='http://www.hdwlab.co.jp'
                target='_blank'
                rel='noopener noreferrer'
              >
                <NoticeableLetters>
                  &copy; Human Dataware Lab.
                </NoticeableLetters>
              </Link>
            </Box>
            <Box sx={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
              <Link
                variant='body2'
                color='inherit'
                href={repository}
                target='_blank'
                rel='noopener noreferrer'
              >
                <NoticeableLetters>GitHub</NoticeableLetters>
              </Link>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </>
  )
}

const Container = ({ ...delegated }: ContainerProps): JSX.Element => {
  return <Component {...delegated} />
}

export { Container as Footer }
export type { ContainerProps as FooterProps }
