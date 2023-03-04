import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import InputBarLong from "./ui/InputBar-long";
import { InstagramIcon } from "./ui/Icons";
import { FacebookIcon } from "./ui/Icons";
import { LinkIcon } from "./ui/Icons";
import { CategoryIcon } from "./ui/Icons";
import { ToolIcon } from "./ui/Icons";
import {
  doc,
  updateDoc,
  onSnapshot,
  getDoc,
  getDocs,
  collection,
  where,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

const Edit = ({
  editing,
  setEditing,
  userInfo,
  setUserInfo,
  projectData,
  setProjectData,
}) => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState({
    introduction: userInfo.introduction,
    instagram: userInfo.instagram,
    facebook: userInfo.facebook,
    otherLink: userInfo.otherLink,
    projectInterests: userInfo.projectInterests,
  });
  const handleSave = async (e) => {
    e.preventDefault();
    const userRef = doc(db, "Users", userInfo.uid);
    if (userRef) {
      const user = await updateDoc(userRef, updateData);
      setEditing(!editing);
    }
  };
  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = e.target.value;
    if (value.trim() !== "") {
      setUpdateData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  useEffect(() => {
    let unsub = onSnapshot(doc(db, "Users", userInfo.uid), (doc) => {
      setUserInfo(doc.data());
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <form className="profile" onSubmit={handleSave}>
      <section className="profile-middle">
        <div className="profile-left-list">
          <h4 className="profile-edit-title">
            Let people know more about you!
          </h4>
          <textarea
            className="profile-middle-intro profile-bg-gradient"
            placeholder={"Introduce yourself here."}
            id="profile-edit-intro"
            name="introduction"
            value={updateData.introduction}
            onChange={handleChange}
          ></textarea>
          <h4 className="profile-edit-title">
            Describe some projects you like!
          </h4>
          <textarea
            className="profile-middle-pr-description"
            placeholder={"Describe the projects you like here."}
            id="profile-edit-intro"
            name="projectInterests"
            value={updateData.projectInterests}
            onChange={handleChange}
          ></textarea>
        </div>
      </section>
      <div className="profile-middle">
        <div>
          <button className=" save" type="submit">
            Save
          </button>
        </div>
        <img src="/images/logo-sm.png" className="logo-md"></img>
        <h4 className="dec-txt">{userInfo.name}</h4>
        <div className="profile-edit-ig">
          <InstagramIcon width="40px" height="40px" className="ig-icon" />
          <InputBarLong
            name="instagram"
            value={updateData.instagram}
            onChange={handleChange}
            placeholder="/collab_hub2023"
            className="edit-input"
          />
        </div>
        <div className="profile-edit-fb">
          <FacebookIcon width="40px" height="40px" className="ig-icon" />
          <InputBarLong
            name="facebook"
            value={updateData.facebook}
            onChange={handleChange}
            className="edit-input"
            placeholder={"/collab_hub2023"}
          />
        </div>
        <div className="profile-edit-link">
          <LinkIcon width="40px" height="40px" className="ig-icon" />
          <InputBarLong
            name="otherLink"
            value={updateData.otherLink}
            onChange={handleChange}
            className="edit-input"
            placeholder={"http://collaborationhub2023.web.app"}
          />
        </div>
      </div>

      <section className="profile-project-list">
        <h4>Side projects</h4>
        {projectData !== null ? (
          projectData.map((doc) => (
            <div className="profile-project">
              <div>
                <h5>{doc.basicDescriProjectName || "Unknown"}</h5>

                <br />
                <span>{doc.submitTime || "No date"}</span>
                <br />
                {doc.skillNeededSkills && (
                  <ToolIcon width="10px" height="10px" />
                )}
                <ul>
                  {doc.skillNeededSkills.map((skill) => {
                    return <li className="skill">{skill}</li>;
                  })}
                </ul>
                <br />
                <CategoryIcon width="10px" height="10px" />
                <ul>
                  {doc.categoryChoices.map((cat) => {
                    return <li className="category">{cat}</li>;
                  })}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <h5>No projects yet</h5>
        )}
      </section>
    </form>
  );
};

export default Edit;
