import React, { useEffect } from "react";
import "./css/style.css";
import "./css/chatBox.css";
import "./css/profile.css";
import "./css/myprojects.css";
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
      <Route path="/profile/:uid" element={<Profile />} />
      <Route path="/add-new-project" element={<AddProject />} />
      <Route path="/AI" element={<AI />} />
    </Routes>
  );
};

export default App;
