import { Post } from "../models/post";

const baseUrl = "http://localhost:8080/api/v1/posts";

export function getList(): Promise<Post[]> {
  return fetch(baseUrl).then((response) => response.json());
}

export function getPost(id: string): Promise<Post> {
  return fetch(`${baseUrl}/${id}`).then((response) => response.json());
}
