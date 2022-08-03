import React, { useState } from "react";
import { createNewPost } from "../services/api";

type FormElement = React.FormEvent<HTMLFormElement>;

export default function Create() {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [content, setContent] = useState<string>("");

  // const history = useNavigate();

  const handleSubmit = (ev: FormElement) => {
    ev.preventDefault();

    createNewPost(title, content, image)
      .then(() => {
        setTitle("");
        setImage("");
        setContent("");
        /*history.push("/home");*/
      })
      .catch((error) => {
        console.error(error); // TODO print error
      });
  };

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <h2>Create post</h2>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <textarea
          placeholder="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
