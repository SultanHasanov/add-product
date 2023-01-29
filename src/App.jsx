import { NavLink, Route, Routes } from "react-router-dom";
import AddPost from "./AddPost";
import "./App.css";
import GetPost from "./GetPost";

function App() {
 

  return (
    <div className="App">
      <div className="header">

      <NavLink to="/" >
        Показать 
      </NavLink>
      <NavLink to="/addpost" >
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
