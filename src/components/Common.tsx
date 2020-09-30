import React from 'react'

import { Breadcrumb, Container, Divider, Menu } from 'semantic-ui-react'

import { DOCUMENT_URL, ROUTE } from '../api/ApiConstant'

export function Header() {
  return (
    <div>
      <br />
      <Menu stackable inverted>
        <Menu.Item color='blue' active>
          <a href='/'>Dataware Tools</a>
        </Menu.Item>

        <Menu.Item position='right'>Login</Menu.Item>
      </Menu>
      <br />
    </div>
  )
}

export function Footer() {
  return (
    <div className='Footer'>
      <br />
      <Divider />
      <Menu text size='mini'>
        <Menu.Item color='blue'>
          &copy;{' '}
          <a
            href='http://www.hdwlab.co.jp'
            target='_blank'
            rel='noopener noreferrer'
          >
            Human Dataware Lab.
          </a>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <a href={DOCUMENT_URL}>Documentation</a>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  )
}

type PageWrapperProps = {
  children: any
}

export class PageWrapper extends React.PureComponent<PageWrapperProps> {
  render() {
    return (
      <Container>
        <Header />
        {this.props.children}
        <Footer />
      </Container>
    )
  }
}

type HierarchicalLinkProps = {
  match?: any
}

export class HierarchicalLink extends React.PureComponent<
  HierarchicalLinkProps
> {
  state = {}

  snake2Pascal = (str: any) => {
    str += ''
    str = str.split('_')
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].slice(0, 1).toUpperCase() + str[i].slice(1, str[i].length)
    }
    return str.join('')
  }

  createURL = (path: string, params?: object) => {
    let url: string = path
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        url = url.replace(':' + key, value)
      }
    }
    return url
  }

  render() {
    if (this.props.match) {
      const items = []

      for (const [key, path] of Object.entries(ROUTE)) {
        const label = this.snake2Pascal(key.toLowerCase())
        if (this.props.match.path === path) {
          items.push(
            <span>
              <Breadcrumb.Section content={label} active />
            </span>
          )
          break
        }
        items.push(
          <span>
            <a href={this.createURL(path, this.props.match.params)}>
              <Breadcrumb.Section content={label} />
            </a>
            <Breadcrumb.Divider />
          </span>
        )
      }

      return (
        <div>
          <Breadcrumb>
            {items.map((item, key) => (
              <span key={key}>{item}</span>
            ))}
          </Breadcrumb>
          <br />
          <br />
        </div>
      )
    } else {
      return null
    }
  }
}

