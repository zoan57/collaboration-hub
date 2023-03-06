import React, { useEffect } from "react";
import "./css/style.css";
import "./css/chatBox.css";
import "./css/ai.css"
import "./css/profile.css";
import "./css/myprojects.css";
import "./css/projectEdit.css";
import "./css/favorite.css";
import "./css/landing.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Project from "./Pages/Project";
import MyProjects from "./Pages/MyProjects";
import ProjectPage from "./Pages/ProjectPage";
import Profile from "./Pages/Profile";
import AddProject from "./Pages/AddProject";
import AI from "./Pages/AI";
import ChatBox from "./Pages/ChatBox";
import ProjectEdit from "./ProjectEdit";
import Favorites from "./Pages/Favorites";
import LandingPage from "./Pages/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/myprojects" element={<MyProjects />} />
      <Route path="/message" element={<ChatBox />} />
      <Route path="/project/:projectId" element={<ProjectPage />} />
      <Route path="/project/:projectId/edit" element={<ProjectEdit/>} />
      <Route path="/profile/:uid" element={<Profile />} />
      <Route path="/add-new-project" element={<AddProject />} />
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/AI" element={<AI />} />
      <Route path="/landing" element={<LandingPage/>}/>
    </Routes>
  );
};

export default App;
