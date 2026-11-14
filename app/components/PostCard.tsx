import type { Post } from "@/lib/db";

export default function PostCard({ post }: { post: Post }) {
  return (
    <li className="rounded-xl border border-zinc-200 bg-white p-4">
      <p className="text-sm font-semibold text-zinc-900">{post.authorName}</p>
      <p className="mt-1 whitespace-pre-wrap text-zinc-800">{post.text}</p>
      <p className="mt-2 text-xs text-zinc-500">{post.createdAt}</p>
    </li>
  );
}
