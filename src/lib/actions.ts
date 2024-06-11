import { api } from "~/lib/api";

export async function addPost(title: string, userId: number) {
  return await api.post("/auth/posts/add", {
    title,
    userId,
  });
}

export async function updatePost(id: number, title: number) {
  return await api.put(`/auth/posts/${id}`, {
    title,
  });
}

export async function deletePost(id: number) {
  return await api.delete(`/auth/posts/${id}`);
}
