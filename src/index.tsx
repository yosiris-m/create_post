import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Posts from "./routes/Posts";
import List from "./routes/List";
import Detail from "./routes/Detail";
import Create from "./routes/Create";
import Edit from "./routes/Edit";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route path="/posts/list" element={<List />} />
          <Route path="/posts/details/:id" element={<Detail />} />
          <Route path="/posts/create/" element={<Create />} />
          <Route path="/posts/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
