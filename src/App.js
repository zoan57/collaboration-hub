import React from "react";
import "./css/style.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Project from "./Pages/Project";
import AI from "./Pages/AI";



const App=()=>{
    return(
        <BrowserRouter basename="/">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/AI" element={<AI/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default App;