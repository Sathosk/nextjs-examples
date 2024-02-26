'use client'
import { AxiosError } from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { revalidatePosts } from '@/actions/revalidate'
import Container from '@/components/Layout/Container'
import Main from '@/components/Layout/Main'
import Spinner from '@/components/loading/Spinner'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { createPost, CreatePostBody } from '@/services/Posts'

export default function Page() {
  const router = useRouter()
  const { register, handleSubmit } = useForm<CreatePostBody>()
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(data: CreatePostBody) {
    setIsLoading(true)
    try {
      const response = await createPost(data)

      await revalidatePosts()

      toast({
        description: 'Your message has been sent.',
      })

      router.push('/fetching-example/server')

      console.log(response)
    } catch (error) {
      const axiosError = error as AxiosError

      if (axiosError.response) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: axiosError.response.data as string,
        })
      } else {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
        })
        console.error(error)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Main>
      <Container className="flex flex-col gap-5">
        <Link href="/fetching-example/server" className="underline">
          Back
        </Link>
        <form
          className="space-y-3 text-black"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              {...register('name')}
              className="w-60"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register('email')}
              className="w-60"
              required
            />
          </div>
          <div className="mb-3 flex flex-col gap-1">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              {...register('content')}
              className="h-20 w-[400px]"
              required
            />
          </div>
          <Button type="submit">{isLoading ? <Spinner /> : 'Submit'}</Button>
        </form>
      </Container>
    </Main>
  )
}
