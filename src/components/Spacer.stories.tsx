import React from 'react'
import { Spacer } from './Spacer'

export default {
  component: Spacer,
  title: 'Spacer'
}

export const Default = (): JSX.Element => (
  <>
    <div>this is</div>
    <Spacer direction='vertical' size='10vh' />
    <div>test</div>
  </>
)
