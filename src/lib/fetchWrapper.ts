export const fetchWrapper = () => {
  async function http<T>(path: string, config: RequestInit): Promise<T> {
    const isClient = typeof window !== 'undefined'
    let isAuth

    // if (isClient) {
    //   isAuth = await getSession()
    // } else {
    //   isAuth = await getSessionOnServer()
    // }

    // if (isAuth) {
    //   config.headers = {
    //     ...config.headers,
    //     Authorization: `${isAuth.backendTokens.accessToken}`,
    //   }
    // }

    const fullPath = `${process.env.NEXT_PUBLIC_API_URL}${path}`

    const request = new Request(fullPath, config)
    const response = await fetch(request)

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    // may error if there is no body, return empty array
    return response.json().catch(() => ({}))
  }

  async function get<T>(path: string, config?: RequestInit): Promise<T> {
    const init = { method: 'get', ...config }
    return await http<T>(path, init)
  }

  async function post<T, U>(
    path: string,
    body: T,
    config?: RequestInit,
  ): Promise<U> {
    const init = { method: 'post', body: JSON.stringify(body), ...config }
    return await http<U>(path, init)
  }

  async function put<T, U>(
    path: string,
    body: T,
    config?: RequestInit,
  ): Promise<U> {
    const init = { method: 'put', body: JSON.stringify(body), ...config }
    return await http<U>(path, init)
  }

  return { get, post, put }
}
