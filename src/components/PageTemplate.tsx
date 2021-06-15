import React from 'react'
import { PageWrapper } from './PageWrapper'
import { PageBody } from './PageBody'
import { PageContainer } from './PageContainer'
import { PageToolBar } from './PageToolBar'

const Component = (): JSX.Element => (
  <PageWrapper repository='test'>
    <PageContainer>
      <PageToolBar />
      <PageBody>body</PageBody>
    </PageContainer>
  </PageWrapper>
)

export { Component as PageTemplate }
