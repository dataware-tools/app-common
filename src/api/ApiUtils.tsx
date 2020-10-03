import React from 'react'
import { Loader, Message } from 'semantic-ui-react'
import request from 'superagent'

export const fetchApi = (
  q: string,
  accessToken: string | undefined = undefined,
  setState = (..._: any) => {},
  callback = (_: any | undefined) => {},
  query: object = { undefined }
) => {
  setState({
    res: undefined,
    isFetchFailed: false,
    isFetchDone: false,
    isFetching: true
  })
  request
    .get(q)
    .set('Authorization', 'Bearer ' + accessToken || '')
    .query(query)
    .then((res: any) => {
      setState(
        {
          res: res.body,
          isFetchFailed: false,
          isFetchDone: true,
          isFetching: false
        },
        callback(res)
      )
    })
    .catch((err: any) => {
      console.error(err)
      setState(
        {
          res:
            err && err.response && err.response.body ? err.response.body : {},
          isFetchFailed: true,
          isFetchDone: true,
          isFetching: false
        },
        callback(undefined)
      )
    })
}

type FetchStatusProps = {
  res?: any
  isFetchDone?: boolean
  isFetchFailed?: boolean
  isFetching?: boolean
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
      {props.isFetching && <Loader inline active size='mini' />}
      {props.isFetchDone && props.isFetchFailed && (
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
