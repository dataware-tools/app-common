import React from 'react'
import { NoticeableLetters } from './NoticeableLetters'
import Box from '@material-ui/core/Box'

type Props = ContainerProps

type ContainerProps = {
  sample: string
}

const Component = ({ sample }: Props): JSX.Element => {
  return (
    <Box role='main' sx={{ ':hover': { backgroundColor: 'action.hover' } }}>
      <NoticeableLetters>{sample}</NoticeableLetters>
    </Box>
  )
}

const Container = ({ ...delegated }: ContainerProps): JSX.Element => {
  return <Component {...delegated} />
}

export { Container as Sample }
export type { ContainerProps as SampleProps }
