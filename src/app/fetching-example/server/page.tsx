import Link from 'next/link'
import { Suspense } from 'react'

import Container from '@/components/Layout/Container'
import Main from '@/components/Layout/Main'
import PostsServer from '@/components/Posts/PostsServer'
import PostSkeleton from '@/components/Skeleton/PostSkeleton'
import { Button } from '@/components/ui/button'

export default async function page() {
  return (
    <Main>
      <Container className="flex flex-col gap-10">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">
            Fetching and rendering server side
          </h1>
          <Button asChild>
            <a href="/fetching-example/server/create-post">Create Post</a>
          </Button>
        </div>

        <Suspense fallback={<PostSkeleton />}>
          <PostsServer />
        </Suspense>

        <div className="text-2x1 bg-red-600 font-bold">
          This is also rendered on Server
        </div>
      </Container>
    </Main>
  )
}
