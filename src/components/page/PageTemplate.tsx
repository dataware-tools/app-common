import React from 'react'
import { PageWrapper } from './PageWrapper'
import { PageMain } from './PageMain'
import { PageContainer } from './PageContainer'
import { PageToolBar } from './PageToolBar'
import { PageTabBar } from './PageTabBar'
import { PageBody } from './PageBody'

const Component = (): JSX.Element => (
  <PageWrapper repository='test'>
    <PageContainer>
      <PageTabBar
        tabNames={Array(20)
          .fill(0)
          .map((_, i) => `test${i}`)}
        onChange={() => window.alert('change')}
        value={1}
      />
      <PageBody>
        <PageToolBar right={<button>tool bar</button>} />
        <PageMain>
          main <br />
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <div key={i}>
                aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
              </div>
            ))}
        </PageMain>
      </PageBody>
    </PageContainer>
  </PageWrapper>
)

export { Component as PageTemplate }
