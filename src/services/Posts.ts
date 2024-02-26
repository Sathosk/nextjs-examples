import { AxiosError } from 'axios'

import axios from '@/lib/axios'
import { fetchWrapper } from '@/lib/fetchWrapper'

export interface Result {
  _id: string
  name: string
  email: string
  content: string
  profilePic: null | string
  cloudinaryId: null | string
  like: number
  timeStamp: Date
  __v: number
}

export interface ResultResponse {
  result: Result[]
}

export type CreatePostBody = {
  name: string
  email: string
  content: string
}

export async function getPost() {
  const fetch = fetchWrapper()
  const delay = new Promise((resolve) => setTimeout(resolve, 2000))

  await delay

  try {
    const response = await fetch.get<ResultResponse>(`/post/all`, {
      next: {
        tags: ['post'],
      },
    })

    return response.result
  } catch (error) {
    console.error(error)
  }
}

export async function createPost(data: CreatePostBody) {
  try {
    const response = await axios.post<Result>('/post/createPost', data)

    return response.data
  } catch (error) {
    const axiosError = error as AxiosError

    if (axiosError.response) {
      console.log(axiosError.response.data)
    } else {
      console.error(axiosError.message)
    }
  }
}
