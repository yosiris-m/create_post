import { Post } from "../models/post";
import { Link } from "react-router-dom";

import missing from "../images/missing.png";

interface PostListItemProps {
  post: Post;
}

export default function ListItemPost({ post }: PostListItemProps) {
  return (
    <Link to={`/posts/details/${post.id}`}>
      <div>
        <h3>{post.title}</h3>
        <img
          src={post.image_url}
          alt="city"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = missing;
          }}
        />
      </div>
    </Link>
  );
}
