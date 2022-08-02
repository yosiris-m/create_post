import { Post } from "../models/post";
import { Link } from "react-router-dom";

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <>
      <Link to="/">Return to list</Link>
      <h3>{post.title}</h3>
      <img src={post.image_url} alt="city" />
      <p>{post.content}</p>
      <p>{post.created_at}</p>
    </>
  );
}
