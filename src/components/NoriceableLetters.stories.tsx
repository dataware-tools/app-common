import React from 'react'
import { NoticeableLetters } from './NoticeableLetters'

export default {
  component: NoticeableLetters,
  title: 'NoticeableLetters'
}

export const Default = (): JSX.Element => (
  <div>
    normal text | <NoticeableLetters>noticeable text</NoticeableLetters>
  </div>
)
