import { API_ROUTE } from './route'
import { fileProvider, metaStore } from '../openapi'

type Data<T> = T extends void | undefined | null
  ? '__fetchSuccess__' | undefined
  : T | undefined

const fetchAPI = async <T, U>(
  fetcher: (args: T) => Promise<U>,
  param: T
): Promise<[data: Data<U>, error: any]> => {
  try {
    const res = await fetcher(param)
    // See: https://miyauchi.dev/ja/posts/typescript-conditional-types#%E5%9E%8B%E5%AE%9A%E7%BE%A9%E3%81%A8-conditional-types
    return [(res || '__fetchSuccess__') as Data<U>, undefined]
  } catch (error) {
    return [undefined as Data<U>, error]
  }
}

const fetchMetaStore = async <T, U>(
  token: string | (() => Promise<string>),
  fetcher: (args: T) => Promise<U>,
  param: T
): Promise<[data: Data<U>, error: any]> => {
  metaStore.OpenAPI.BASE = API_ROUTE.META.BASE
  metaStore.OpenAPI.TOKEN = token
  return await fetchAPI(fetcher, param)
}

const fetchFileProvider = async <T, U>(
  token: string | (() => Promise<string>),
  fetcher: (args: T) => Promise<U>,
  param: T
): Promise<[data: Data<U>, error: any]> => {
  fileProvider.OpenAPI.BASE = API_ROUTE.FILE.BASE
  fileProvider.OpenAPI.TOKEN = token
  return await fetchAPI(fetcher, param)
}

const extractReasonFromFetchError = (fetchError: {
  body?: { detail?: unknown }
}): string => {
  if (typeof fetchError.body?.detail === 'string') {
    return fetchError.body?.detail
  } else if (fetchError.body?.detail) {
    return JSON.stringify(fetchError.body.detail)
  } else {
    return JSON.stringify(fetchError)
  }
}

export {
  fetchAPI,
  fetchMetaStore,
  fetchFileProvider,
  extractReasonFromFetchError
}
