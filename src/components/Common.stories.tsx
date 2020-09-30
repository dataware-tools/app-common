import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import {Footer, Header, HierarchicalLink, PageWrapper} from "./Common";


storiesOf('Common/Header', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['database_id']}>{story()}</MemoryRouter>
  ))
  .add('default', () =>
    <div>
      <Header/>
    </div>
  )


storiesOf('Common/Footer', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['database_id']}>{story()}</MemoryRouter>
  ))
  .add('default', () =>
    <div>
      <Footer/>
    </div>
  )

storiesOf('Common/PageWrapper', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['database_id']}>{story()}</MemoryRouter>
  ))
  .add('default', () =>
    <div>
      <PageWrapper children={<div>Content</div>}/>
    </div>
  )

storiesOf('Common/HierarchicalLink', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['database_id']}>{story()}</MemoryRouter>
  ))
  .add('default', () =>
    <div>
      <HierarchicalLink
        match={{
          params: {
            database_id: 'database_id',
          },
          path: '/',
        }}
      />
    </div>
  )
