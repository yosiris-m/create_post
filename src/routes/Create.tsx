import React from "react";
import { createNewPost } from "../services/api";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function Create() {
  const navigate = useNavigate();

  const handleSubmit = (title: string, content: string, image: string) => {
    createNewPost(title, content, image)
      .then(() => {
        navigate("/posts/list", { replace: true });
      })
      .catch((error) => {
        console.error(error); // TODO print error
      });
  };

  return (
    <>
      <h2>Create post</h2>
      <PostForm onSubmit={handleSubmit} />
    </>
  );
}
