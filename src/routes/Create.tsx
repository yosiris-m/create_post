import React from "react";
import { createNewPost } from "../services/api";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import styles from "./Edit.module.css";

export default function Create() {
  const navigate = useNavigate();

  const handleSubmit = (title: string, content: string, image: string) => {
    createNewPost(title, content, image)
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.error(error); // TODO print error
      });
  };

  return (
    <div className={styles.container}>
      <h3>Create new post</h3>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
}
