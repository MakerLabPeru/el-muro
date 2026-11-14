import { connection } from "next/server";
import PostCard from "@/app/components/PostCard";
import { listPosts } from "@/lib/db";

export default async function PostList() {
  await connection();
  const posts = listPosts();

  return (
    <ul className="flex flex-col gap-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
}
