export function getQueryString(key: string): string | null {
  return new URLSearchParams(window.location.search).get(key)
}

export function deleteQueryString(
  key: string | string[],
  method: 'replace' | 'push'
): void {
  const currentParamObj = new URLSearchParams(window.location.search)
  if (typeof key === 'string') {
    if (currentParamObj.has(key)) {
      currentParamObj.delete(key)
    }
  } else {
    key.forEach((key) => {
      if (currentParamObj.has(key)) {
        currentParamObj.delete(key)
      }
    })
  }

  const newParamString = currentParamObj.toString()
  const newRelativeURL = newParamString === '' ? '?' : `?${newParamString}`
  if (method === 'push') {
    history.pushState(null, '', newRelativeURL)
  } else if (method === 'replace') {
    history.replaceState(null, '', newRelativeURL)
  }
}

export function resetQueryString(method: 'push' | 'replace'): void {
  if (method === 'push') {
    history.pushState(null, '', '?')
  } else if (method === 'replace') {
    history.replaceState(null, '', '?')
  }
}

export type QueryStringConvertibleObj = Record<
  string,
  string | number | undefined | null | (string | number)[]
>

export function objToQueryString(obj: QueryStringConvertibleObj): string {
  let flag = true
  let paramString = ''
  for (const [key, value] of Object.entries(obj)) {
    if (value != null) {
      if (flag) {
        paramString += '?'
        flag = false
      } else {
        paramString += '&'
      }

      if (Array.isArray(value)) {
        paramString += `${key}=${JSON.stringify(value)}`
      } else {
        paramString += `${key}=${value}`
      }
    }
  }
  return paramString
}

export function addQueryString(
  queryString: string | QueryStringConvertibleObj,
  method: 'push' | 'replace'
): void {
  if (queryString === '' || queryString === '?' || queryString === '&') {
    return
  }
  const currentQueryObj = new URLSearchParams(window.location.search)
  const newQueryObj = new URLSearchParams(
    typeof queryString === 'string'
      ? queryString
      : objToQueryString(queryString)
  )

  for (const key of newQueryObj.keys()) {
    if (currentQueryObj.has(key)) {
      currentQueryObj.delete(key)
    }
  }

  const currentQueryString = currentQueryObj.toString()
  const newQueryString = newQueryObj.toString()
  const newRelativeURL =
    currentQueryString === '' && newQueryString === ''
      ? '?'
      : currentQueryString === '' && newQueryString !== ''
      ? `?${newQueryString}`
      : currentQueryString !== '' && newQueryString === ''
      ? `?${currentQueryString}`
      : `?${currentQueryString}&${newQueryString}`
  if (method === 'push') {
    history.pushState(null, '', newRelativeURL)
  } else if (method === 'replace') {
    history.replaceState(null, '', newRelativeURL)
  }
}
