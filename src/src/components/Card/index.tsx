import React from "react";
import { useLocation } from "react-router-dom";

const Card = () => {
  interface Ipost {
    id: number;
    userId: number;
    title: string;
    body: string;
  }

  type Iposts = Ipost[];

  interface ILocationState {
    posts: Iposts;
    postId: number;
  }

  const location = useLocation();
  const state = location.state as ILocationState; //https://github.com/reach/router/issues/414#issuecomment-859406190

  const posts = state.posts;
  const postId: keyof Iposts = state.postId; //https://stackoverflow.com/a/63063344/7857134

  const post = posts[postId];

  return (
    <div>
      <ol>
        <li> User ID{post.userId}</li>
        <li> Post ID{post.id - 1}</li>
        <li> Post ID{post.title}</li>
        <li> Post ID{post.body}</li>
      </ol>
    </div>
  );
};

export default Card;
