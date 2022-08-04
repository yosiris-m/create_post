import { Post } from "../models/post";
import { Link, useNavigate } from "react-router-dom";
import { deletePost } from "../services/api";
import styles from "./PostDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import PostImage from "./PostImage";

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  const navigate = useNavigate();
  const handleDeletePost = async () => {
    const res = await deletePost(post.id);
    if (res.ok) {
      navigate("/", { replace: true });
    } else {
      alert("Unexpected response code deleting post: " + res.statusText);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.returnBox}>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} /> Return to list
        </Link>
      </div>
      <div className={styles.box}>
        <PostImage className={styles.picture} url={post.image_url} />
        <div className={styles.content}>
          <h3>{post.title}</h3>
          <FontAwesomeIcon
            icon={faTrash}
            className={styles.deleteBtn}
            onClick={handleDeletePost}
          />
          <p>{post.content}</p>
          <p>
            <em>{moment(post.created_at).format("LL")}</em>
          </p>
          <Link to={`/edit/${post.id}`}>
            <FontAwesomeIcon icon={faEdit} /> Edit
          </Link>
        </div>
      </div>
    </section>
  );
}
