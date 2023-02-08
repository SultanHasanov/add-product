import axios from 'axios';
import React, { useState } from 'react';

function AddPost() {
  // const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // console.log(file)

  const addProduct = () => {
    
    
    const api = "http://localhost:3002/product";
    const photo = document.querySelector("img").getAttribute("src");

    axios.post(api, {
      image: photo,
      name,
      price,
    });
  };

  const onChancheFile = (e) => {
    // setFile(e.target.files[0]);
    // const reader = new FileReader()
    // if(file) {
    //   reader.readAsDataURL(file)
    // }

    const preview = document.querySelector("img");
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        // convert image file to base64 string
        preview.src = reader.result;
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="addpost">
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Название товара"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Цена"
        />
        <input name="file" type="file" onChange={onChancheFile} />
        <button className='btn_add' onClick={addProduct}>Добавить</button>
        <img width="200px" height="150px" src="" alt="" />
      </form>
    </div>
  );
}

export default AddPost;
