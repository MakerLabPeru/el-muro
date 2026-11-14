import { publishPost } from "@/app/actions";

export default function PostForm() {
  return (
    <form action={publishPost} className="flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-4">
      <textarea
        name="text"
        required
        maxLength={280}
        placeholder="Escribe algo para el muro…"
        className="min-h-20 resize-none rounded-lg border border-zinc-200 p-3 outline-none focus:border-red-600"
      />
      <button className="self-end rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700">
        Publicar
      </button>
    </form>
  );
}
