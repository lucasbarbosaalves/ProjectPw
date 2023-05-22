import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../components/Login";
import Header from "../components/Header";

function Rotas() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
