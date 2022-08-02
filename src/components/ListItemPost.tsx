import { Post } from "../models/post";
import { Link } from "react-router-dom";

interface PostListItemProps {
  post: Post;
}

export default function ListItemPost({ post }: PostListItemProps) {
  return (
    <>
      <Link to={`/details/${post.id}`}>
        <h3>{post.title}</h3>
        <img src={post.image_url} alt="city" />
      </Link>
    </>
  );
}
