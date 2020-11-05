import React from 'react'
import { Loader, Message } from 'semantic-ui-react'
import request from 'superagent'

export const fetchApi = (
  api: string | Promise<any>,
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
  if (typeof api === 'string') {
    request
      .get(api)
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
  } else {
    api
      .then((res: any) => {
        setState(
          {
            res: res.data,
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

export const postApi = (
  api: string | Promise<any>,
  accessToken: string | undefined = undefined,
  setState = (..._: any) => {},
  callback = (_: any | undefined) => {},
  data: object = { undefined }
) => {
  setState({
    res: undefined,
    isPostFailed: false,
    isPostDone: false,
    isPosting: true
  })
  if (typeof api === 'string') {
    request
      .get(api)
      .set('Authorization', 'Bearer ' + accessToken || '')
      .send(data)
      .then((res: any) => {
        setState(
          {
            res: res.body,
            isPostFailed: false,
            isPostDone: true,
            isPosting: false
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
            isPostFailed: true,
            isPostDone: true,
            isPosting: false
          },
          callback(undefined)
        )
      })
  } else {
    api
      .then((res: any) => {
        setState(
          {
            res: res.data,
            isPostFailed: false,
            isPostDone: true,
            isPosting: false
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
            isPostFailed: true,
            isPostDone: true,
            isPosting: false
          },
          callback(undefined)
        )
      })
  }
}

type PostStatusProps = {
  res?: any
  isPostDone?: boolean
  isPostFailed?: boolean
  isPosting?: boolean
}

export const PostStatus = (props: PostStatusProps) => {
  const getContent = (): string => {
    if (props.res && props.res.error) {
      return 'Error: ' + props.res.error
    } else {
      return 'Could not send data.'
    }
  }

  return (
    <div>
      {props.isPosting && <Loader inline active size='mini' />}
      {props.isPostDone && props.isPostFailed && (
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
