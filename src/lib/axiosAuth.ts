import axios, { AxiosInstance } from 'axios'
import { getSession } from 'next-auth/react'

const createApiClient = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      charset: 'utf-8',
    },
  })

  instance.interceptors.request.use(async (config) => {
    try {
      // if (session) {
      //   config.headers.Authorization = `Bearer ${session.backendTokens.accessToken}`
      // }

      return config
    } catch (error) {
      console.error('Error fetching session:', error)
      return config
    }
  })

  return instance
}

export default createApiClient
