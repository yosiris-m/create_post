import React, { useState } from "react";
import { Post } from "../models/post";
import styles from "./PostForm.module.css";
import { useNavigate } from "react-router-dom";

type FormElement = React.FormEvent<HTMLFormElement>;

interface PostFormProps {
  onSubmit: (title: string, content: string, image: string) => void;
  post?: Post;
}

export default function PostForm({ onSubmit, post }: PostFormProps) {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>(post ? post.title : "");
  const [image, setImage] = useState<string>(post ? post.image_url : "");
  const [content, setContent] = useState<string>(post ? post.content : "");

  const handleCancel = () => {
    if (post?.id) {
      navigate(`/details/${post.id}`, { replace: true });
    } else {
      navigate(`/`, { replace: true });
    }
  };

  const handleSubmit = (ev: FormElement) => {
    ev.preventDefault();

    onSubmit(title, content, image);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.formRow}>
        <label>Title</label>
        <input
          required
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className={styles.formRow}>
        <label>Content</label>
        <textarea
          required
          placeholder="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <div className={styles.formRow}>
        <label>Image</label>
        <input
          required
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </div>

      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.btnCancel}
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
