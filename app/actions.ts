"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { addPost } from "@/lib/db";

export async function publishPost(formData: FormData) {
  const { userId } = await auth();
  if (!userId) return;

  const text = String(formData.get("text") ?? "").trim();
  if (!text) return;

  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress ?? "";
  const name = user?.firstName ?? user?.username ?? email.split("@")[0] ?? "Anónimo";
  addPost(userId, name, text.slice(0, 280));
  revalidatePath("/");
}
