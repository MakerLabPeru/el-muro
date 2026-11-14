import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Muro",
  description: "Un muro donde cada persona con sesión puede publicar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full bg-zinc-50 text-zinc-900">
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
