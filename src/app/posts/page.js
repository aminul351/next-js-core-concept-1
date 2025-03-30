import Link from "next/link";

export const getPosts = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json();
    return posts;
}

export default async function PostPage() {
    const posts = await getPosts()
    return (
      <ul>
        {posts.map((post) => (
          <div key={post.id} className="border m-4 p-4">
            <h2 className="font-bold text-xl">{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`}><button className="bg-blue-500 px-4">Details</button></Link>
            </div>
        ))}
      </ul>
    )
  }