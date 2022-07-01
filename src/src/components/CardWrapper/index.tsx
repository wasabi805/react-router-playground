import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Ipost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface IlocalState {
  data: Ipost[] | undefined;
}

const CardWrapper: React.FC = () => {
  const [localState, setLocalState] = useState<IlocalState>({
    data: [],
  });

  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/post/${id}`, { state: { posts: localState.data, postId: id } });
  };

  const fetchPosts = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setLocalState({
          ...localState,
          data: res.data,
        });
      });
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="card-wrapper">
      {localState.data?.map((item) => {
        return (
          <span key={`post-card-${item.id}`} className="card">
            <button onClick={() => handleNavigate(item.id)}>
              Post id: {item.id}
            </button>
          </span>
        );
      })}
    </div>
  );
};

export default CardWrapper;
