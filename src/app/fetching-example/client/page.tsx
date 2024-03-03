import Link from 'next/link'
import { Suspense } from 'react'

import Container from '@/components/Layout/Container'
import Main from '@/components/Layout/Main'
import PostsClient from '@/components/Posts/PostsClient'
import PostSkeleton from '@/components/Skeleton/PostSkeleton'
import { Button } from '@/components/ui/button'

export default async function page() {
  return (
    <Main>
      <Container className="flex flex-col gap-10">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">
            Fetching and rendering client side
          </h1>
          <Button asChild>
            <Link href="/fetching-example/client/create-post">Create Post</Link>
          </Button>
        </div>

        <PostsClient />
      </Container>
    </Main>
  )
}
