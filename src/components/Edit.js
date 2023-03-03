import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Edit = ({ editing, setEditing, userInfo }) => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSave = () => {
    setEditing(false);
  };

  return (
    <form className="profile">
      <div className="profile-left">
        <div>
          <h4 className="dec-txt">{userInfo.name}</h4>
          <button
            className=" save"
            type="button"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        <div className="profile-left-list">
          <p contentEditable="true">Your previous projects</p>
        </div>
      </div>
      <div className="profile-middle">
        <div className="profile-middle-intro profile-bg-gradient">
          <p contentEditable="true">Introduce yourself here.</p>
        </div>
        <div className="profile-middle-pr-description">
          <p contentEditable="true">Describe the projects you like here.</p>
        </div>
      </div>
      <div className="profile-right">
        <img src="/images/logo-sm.png" className="logo-md"></img>
        <div className="profile-right-skill">
          <p contentEditable="true">Introduce yourself here.</p>
        </div>
        <div className="profile-right-interest">
          <p contentEditable="true">Describe the projects you like here.</p>
        </div>
      </div>
    </form>
  );
};

export default Edit;
