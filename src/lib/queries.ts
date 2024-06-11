import { api } from "~/lib/api";
import type { Post, User } from "~/types";

export async function getPosts() {
  return await api.get<{ posts: Post[] }>("/auth/posts?limit=10");
}

export async function getPost(id: number) {
  return await api.get<Post>(`/auth/post/${id}`);
}

export async function getUser(id: number) {
  return await api.get<User>(`/auth/users/${id}`);
}
