import React from 'react'
import { PageWrapper } from './PageWrapper'
import { PageBody } from './PageBody'
import { PageContainer } from './PageContainer'
import { PageToolBar } from './PageToolBar'
import { repository } from '../../package.json'

const Component = (): JSX.Element => (
  <PageWrapper repository={repository}>
    <PageContainer>
      <PageToolBar />
      <PageBody>body</PageBody>
    </PageContainer>
  </PageWrapper>
)

export { Component as PageTemplate }
