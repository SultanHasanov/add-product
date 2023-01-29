import axios from "axios";
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import AddPost from "./AddPost";
import "./App.css";
import GetPost from "./GetPost";

function App() {
 

  return (
    <div className="App">
      <div className="header">

      <NavLink to="/" activeClassName="active">
        Показать 
      </NavLink>
      <NavLink to="/addpost" activeClassName="active">
        Добавить
      </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<GetPost/>} />
        <Route path="/addpost" element={<AddPost/>} />
      </Routes>
    </div>
  );
}

export default App;
