import React, { useState } from "react";
import { Post } from "../models/post";

type FormElement = React.FormEvent<HTMLFormElement>;

interface PostFormProps {
  onSubmit: (title: string, content: string, image: string) => void;
  post?: Post;
}

export default function PostForm({ onSubmit, post }: PostFormProps) {
  const [title, setTitle] = useState<string>(post ? post.title : "");
  const [image, setImage] = useState<string>(post ? post.image_url : "");
  const [content, setContent] = useState<string>(post ? post.content : "");

  const handleSubmit = (ev: FormElement) => {
    ev.preventDefault();

    onSubmit(title, content, image);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <textarea
        placeholder="content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <input
        type="text"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}
