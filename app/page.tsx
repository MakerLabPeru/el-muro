import { Suspense } from "react";
import { Show } from "@clerk/nextjs";
import Header from "@/app/components/Header";
import PostForm from "@/app/components/PostForm";
import PostList from "@/app/components/PostList";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-col gap-6 px-4 py-10">
      <Header />
      <Show when="signed-in">
        <PostForm />
      </Show>
      <Show when="signed-out">
        <p className="text-zinc-600">Inicia sesión para escribir en el muro.</p>
      </Show>
      <Suspense fallback={<p className="text-zinc-500">Cargando el muro…</p>}>
        <PostList />
      </Suspense>
    </main>
  );
}
