import React, { useEffect, useState } from "react";
import { getList } from "../services/api";
import ListItemPost from "../components/ListItemPost";
import { Post } from "../models/post";
import styles from "./List.module.css";
import { Link } from "react-router-dom";
import noPostsImg from "../images/samana_picture.png";

export default function List() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    getList()
      .then((data) => {
        setPostList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (postList.length === 0) {
    return (
      <div className={styles.box}>
        <p>Welcome to travel blog, a place to view and share your travels</p>
        <p>there are currently no post created.</p>
        <Link to="/create" className={styles.linkNewPost}>
          Create the first post
        </Link>
        <img className={styles.image} src={noPostsImg} alt="Samana beach" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {postList.map((post) => (
        <ListItemPost key={post.id} post={post} />
      ))}
    </div>
  );
}
