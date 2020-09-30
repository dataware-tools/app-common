import React from 'react'

import { Loader, Message } from 'semantic-ui-react'

import request from 'superagent'

export const fetchApi = (
  q: string,
  setState = (..._: any[]) => {},
  callback = () => {},
  query: object = { undefined }
) => {
  request
    .get(q)
    .query(query)
    .then((res) => {
      setState(
        {
          res: res.body,
          is_fetch_failed: false,
          is_fetch_done: true
        },
        callback()
      )
    })
    .catch((err) => {
      console.error(err)
      setState(
        {
          res:
            err && err.response && err.response.body ? err.response.body : {},
          is_fetch_failed: true,
          is_fetch_done: true
        },
        callback()
      )
    })
}

type FetchStatusProps = {
  res?: any
  is_fetch_done?: boolean
  is_fetch_failed?: boolean
}

export const FetchStatus = (props: FetchStatusProps) => {
  const getContent = (): string => {
    if (props.res && props.res.error) {
      return 'Error: ' + props.res.error
    } else {
      return 'Please reload this page.'
    }
  }

  return (
    <div>
      {!props.is_fetch_done && <Loader inline active size='mini' />}
      {props.is_fetch_done && props.is_fetch_failed && (
        <Message
          negative
          icon='exclamation triangle'
          header='Fetch failed'
          content={getContent()}
        />
      )}
    </div>
  )
}
