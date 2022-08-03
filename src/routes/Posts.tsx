import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Posts.module.css";

function Posts() {
  return (
    <>
      <header className={styles.header}>
        <h1>Travel Blog</h1>
        <Link to="/posts/create">+ create post</Link>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default Posts;
