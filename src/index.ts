import fetch from 'cross-fetch'

export type StringObject = Record<string, string>

const toUrl = (url: URL | string): URL => {
  try {
    return typeof url === 'string' ? new URL(url) : url
  } catch (error) {
    console.error(`Invalid URL : ${typeof url === 'string' ? url : url.href}`)
    throw error
  }
}

export const get = async (url: URL | string, params: StringObject | null = null, headers?: StringObject): Promise<Response> => {
  const cleanedUrl = toUrl(url)

  const requestOptions = {
    method: 'GET',
    headers
  }

  if (params != null) {
    Object.keys(params)
      .forEach(key => {
        cleanedUrl.searchParams.append(key, params[key])
      })
  }

  return await fetch(cleanedUrl.href, requestOptions)
}

export const post = async (url: URL | string, params: any = {}, headers?: StringObject): Promise<Response> => {
  const cleanedUrl = toUrl(url)

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(params)
  }
  return await fetch(cleanedUrl.href, requestOptions)
}

export const put = async (url: URL | string, params: any = {}, headers?: StringObject): Promise<Response> => {
  const cleanedUrl = toUrl(url)

  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(params)
  }
  return await fetch(cleanedUrl.href, requestOptions)
}

export const del = async (url: URL | string, headers?: StringObject): Promise<Response> => {
  const cleanedUrl = toUrl(url)

  const requestOptions = {
    method: 'DELETE',
    headers
  }
  return await fetch(cleanedUrl.href, requestOptions)
}
