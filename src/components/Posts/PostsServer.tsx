import { getPost } from '@/services/Posts'

export default async function PostsServer() {
  const data = await getPost()

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
