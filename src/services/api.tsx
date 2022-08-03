import { Post } from "../models/post";

const baseUrl = "http://localhost:8080/api/v1/posts";

export function getList(): Promise<Post[]> {
  return fetch(baseUrl).then((response) => response.json());
}

export function getPost(id: string): Promise<Post> {
  return fetch(`${baseUrl}/${id}`).then((response) => response.json());
}

export function createNewPost(title: string, content: string, image: string) {
  console.log("title ->", title);
  console.log("content ->", content);
  console.log("image ->", image);

  const body = {
    title: title,
    content: content,
    image_url: image,
  };

  return fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
}
export function toUpdatePost(
  id: string,
  title: string,
  content: string,
  image: string
) {
  console.log("title ->", title);
  console.log("content ->", content);
  console.log("image ->", image);

  const body = {
    title: title,
    content: content,
    image_url: image,
  };

  return fetch(`${baseUrl}/${id}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
}
