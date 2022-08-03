import { Link } from "react-router-dom";
import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.header}>
      <div className={styles.boxDescription}>
        <h1>Travel Blog</h1>
      </div>
      <p className={styles.descriptionBlog}>
        Welcome to travel blog, a place to view and share your travels.
      </p>
      <p>
        <Link to="/posts/list">View posts</Link>
      </p>
    </main>
  );
}
