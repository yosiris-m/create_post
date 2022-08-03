import React, { useEffect, useState } from "react";
import { editPost, getPost } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import { Post } from "../models/post";

export default function Edit() {
  const navigate = useNavigate();
  const [post, setPost] = useState<Post>();

  let params = useParams();

  useEffect(() => {
    if (!params.id) {
      return;
    }
    getPost(params.id).then((data) => {
      setPost(data);
    });
  }, [params.id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (title: string, content: string, image: string) => {
    editPost(post.id, title, content, image)
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.error(error); // TODO print error
      });
  };

  return (
    <div>
      <h2>Edit post</h2>
      <PostForm onSubmit={handleSubmit} post={post} />
    </div>
  );
}
