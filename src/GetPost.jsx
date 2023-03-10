import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Base64 } from "js-base64";

const GetPost = () => {
  const [post, setPost] = useState([]);
  const api = "http://localhost:3002/product";
  console.log(post)

  const getAxios = async () => {
    const {data} = await axios.get(api);
    setPost(data);
  };
  const deleteAxios = async (id) => {
    await axios.delete(`http://localhost:3002/product/${id}`)
    setPost(post.filter((el) => el.id !== id));
  }

  useEffect(() => {
    getAxios();
    deleteAxios()
  }, []);
  return (
    <div className="getpost">
      {post.map((el) => {
        return (
          <div className="card" key={el.id}>
            <img className="img" src={el.image} alt="" />
            <p>
              <b>Name: </b>
              {el.name}
            </p>
            <p>
              <b>Price: </b>
              {el.price} ₽
            </p>
            <button className="btn_delete" onClick={() => deleteAxios(el.id)}>Удалить</button>
          </div>
        );
      })}
    </div>
  );
};

export default GetPost;
