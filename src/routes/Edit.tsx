import React, { useEffect, useState } from "react";
import { editPost, getPost } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

type FormElement = React.FormEvent<HTMLFormElement>;

export default function Edit() {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [id, setId] = useState<number>();

  let params = useParams();

  useEffect(() => {
    if (!params.id) {
      return;
    }
    getPost(params.id).then((data) => {
      setId(data.id);
      setTitle(data.title);
      setImage(data.image_url);
      setContent(data.content);
    });
  }, [params.id]);

  if (!id) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (ev: FormElement) => {
    ev.preventDefault();

    editPost(id, title, content, image)
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.error(error); // TODO print error
      });
  };

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <h2>Edit post</h2>
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
