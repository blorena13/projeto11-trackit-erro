import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./src/pages/Login/Login";
import Register from "./src/pages/Register/Register";
import Habits from "./src/pages/Habits/Habits";
import Today from "./src/pages/Today/Today";
import History from "./src/pages/History/History";

function App() {
  return (
    <>
     <BrowserRouter>
<NavBar/>

    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
      <Route path="/habitos" element={<Habits/>} />
      <Route path="/hoje" element={<Today/>} />
      <Route path="/historico" element={<History/>} />

    </Routes>

    </BrowserRouter>


    </>
  );
}

export default App;
