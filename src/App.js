import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route,  Link} from "react-router-dom";


function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </div>
    </>
  );
}

export default App;
