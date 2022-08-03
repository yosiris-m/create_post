import { useEffect, useState } from "react";
import { getList } from "../services/api";
import ListItemPost from "../components/ListItemPost";
import { Post } from "../models/post";
import { Link } from "react-router-dom";

export default function List() {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    getList().then((data) => {
      setPostList(data);
    });
  }, []);

  return (
    <div>
      <Link to="/create/">+ create post</Link>
      {postList.map((post) => (
        <ListItemPost key={post.id} post={post} />
      ))}
    </div>
  );
}
