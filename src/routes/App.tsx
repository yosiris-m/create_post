import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.box}>
          <h1 className={styles.title}>🌎 Travel Blog</h1>
          <nav className={styles.boxCreatePost}>
            <p>🧳 Share your experiences with us</p>
            <Link to="/create" className="button">
              <FontAwesomeIcon icon={faPlus} /> Create new post
            </Link>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
