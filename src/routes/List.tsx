import { useEffect, useState } from "react";
import { getList } from "../services/api";
import ListItemPost from "../components/ListItemPost";
import { Post } from "../models/post";

export default function List() {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    getList().then((data) => {
      setPostList(data);
    });
  }, []);

  return (
    <div>
      {postList.map((post) => (
        <ListItemPost key={post.id} post={post} />
      ))}
    </div>
  );
}
