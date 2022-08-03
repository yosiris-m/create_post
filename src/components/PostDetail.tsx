import { Post } from "../models/post";
import { Link, useNavigate } from "react-router-dom";
import { deletePost } from "../services/api";

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  let navigate = useNavigate();
  const handleDeletePost = async () => {
    const res = await deletePost(post.id);
    if (res.ok) {
      navigate("/", { replace: true });
    } else {
      alert("Unexpected response code deleting post: " + res.statusText);
    }
  };

  return (
    <>
      <Link to="/">Return to list</Link>
      <h3>{post.title}</h3>
      <img src={post.image_url} alt="city" />
      <p>{post.content}</p>
      <p>{post.created_at}</p>
      <button type="button" onClick={handleDeletePost}>
        Delete
      </button>
    </>
  );
}
