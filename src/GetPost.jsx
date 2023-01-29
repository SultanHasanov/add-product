import axios from "axios";
import React, { useEffect, useState } from "react";

const GetPost = () => {
  const [post, setPost] = useState([]);
  const api = "http://localhost:3002/product";

  const getAxios = async () => {
    const res = await axios.get(api);
    setPost(res.data);
  };

  useEffect(() => {
    getAxios();
  }, []);

  return (
    <div className="getpost">
     
      {post.map((el) => {
        return (
          <div className="card">
            <img className="img" src={el.image} alt="" />
            <p><b>Имя: </b>{el.name}</p>
            <p><b>Цена: </b>{el.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GetPost;
