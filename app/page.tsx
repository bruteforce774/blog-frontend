import { client } from '@/sanity/client'
import { postsQuery } from '@/sanity/queries'

export default async function Home() {
  const posts = await client.fetch(postsQuery)

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post: any) => (
          <li key={post._id} className="border-b pb-6">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {post.author} · {post.category} · {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            {post.excerpt && (
              <p className="mt-2 text-gray-700">{post.excerpt}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  )
}
