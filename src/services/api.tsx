import { Post } from "../models/post";

const baseUrl = "http://localhost:8080/api/v1/posts";

export function getList(): Promise<Post[]> {
  return fetch(baseUrl).then((response) => response.json());
}

export function getPost(id: string): Promise<Post> {
  return fetch(`${baseUrl}/${id}`).then((response) => response.json());
}

export function createNewPost(title: string, content: string, image: string) {
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

export function deletePost(id: number): Promise<Response> {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
}

export function editPost(
  id: number,
  title: string,
  content: string,
  image: string
): Promise<Post> {
  const body = {
    title: title,
    content: content,
    image_url: image,
  };

  return fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      alert("Unexpected response code editing post: " + res.statusText);
    }
  });
}
