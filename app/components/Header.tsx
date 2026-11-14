import { Show, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-extrabold tracking-tight">
        El <span className="text-red-600">Muro</span>
      </h1>
      <Show when="signed-out">
        <SignInButton mode="modal">
          <button className="rounded-lg border border-zinc-300 px-4 py-2 font-medium">Iniciar sesión</button>
        </SignInButton>
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </header>
  );
}
