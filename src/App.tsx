import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <h1>Travel Blog</h1>
      </header>
      <main>
        <Outlet />
      </main>

    </>
  );
}

export default App;
