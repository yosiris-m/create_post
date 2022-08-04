import { Post } from "../models/post";
import { Link } from "react-router-dom";
import styles from "./ListItemPost.module.css";
import PostImage from "./PostImage";

interface PostListItemProps {
  post: Post;
}

export default function ListItemPost({ post }: PostListItemProps) {
  return (
    <Link to={`/details/${post.id}`}>
      <div className={styles.container}>
        <PostImage className={styles.picture} url={post.image_url} />
        <h3 className={styles.title}>{post.title}</h3>
      </div>
    </Link>
  );
}
