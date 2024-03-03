'use client'
import { useQuery } from '@tanstack/react-query'

import { getPost } from '@/services/Posts'

import PostSkeleton from '../Skeleton/PostSkeleton'

export default function PostsClient() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['get-post'],
    queryFn: getPost,
  })

  if (isLoading) return <PostSkeleton />

  if (!data) return <div>Something went wrong.</div>

  return (
    <div className="flex flex-col gap-5">
      {data.map((post) => (
        <div key={post._id}>
          <h2 className="text-xl font-bold">{post.name}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}
