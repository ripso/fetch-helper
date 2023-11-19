export type StringObject = Record<string, string>

export const get = async (url: URL, params: StringObject | null = null, headers?: StringObject): Promise<Response> => {
  const requestOptions = {
    method: 'GET',
    headers
  }

  if (params != null) {
    Object.keys(params)
      .forEach(key => {
        url.searchParams.append(key, params[key])
      })
  }

  return await fetch(url.href, requestOptions)
}

export const post = async (url: URL, params: any, headers?: StringObject): Promise<Response> => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(params)
  }
  return await fetch(url.href, requestOptions)
}

export const put = async (url: URL, params: any, headers: StringObject): Promise<Response> => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(params)
  }
  return await fetch(url.href, requestOptions)
}

export const del = async (url: URL, headers: StringObject): Promise<Response> => {
  const requestOptions = {
    method: 'DELETE',
    headers
  }
  return await fetch(url.href, requestOptions)
}
