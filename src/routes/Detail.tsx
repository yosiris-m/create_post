import { useEffect, useState } from "react";
import { getPost } from "../services/api";
import PostDetail from "../components/PostDetail";
import { useParams } from "react-router-dom";
import { Post } from "../models/post";

export default function Detail() {
  const [post, setPost] = useState<Post>();
  let { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    getPost(id).then((data) => {
      console.log("post", data);
      setPost(data);
    });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PostDetail post={post} />
    </div>
  );
}
