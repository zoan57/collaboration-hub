import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
  setDoc,
  query,
  where,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../firebase";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const ChatTextIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="#333"
      class="bi bi-chat-right-dots-fill "
      viewBox="0 0 16 16"
    >
      {" "}
      <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />{" "}
    </svg>
  );
};
const ProjectPage = () => {
  const [projectData, setProjectData] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const { projectId } = useParams();
  const [basicDescriLocation, setBasicDescriLocation] = useState("");
  const [skillNeededSkills, setSkillNeededSkills] = useState("");
  const navigate = useNavigate();

  const getYourProject = async () => {
    const yourProjectRef = doc(db, "Projects", projectId);
    const yourProjectDoc = await getDoc(yourProjectRef);
    if (yourProjectDoc.exists()) {
      const yourProjectData = yourProjectDoc.data();
      setProjectData(yourProjectData);
      setBasicDescriLocation(yourProjectData.basicDescriLocation.join(", "));
      setSkillNeededSkills(yourProjectData.skillNeededSkills.join(", "));
    } else {
      setProjectData("No such project!");
    }
  };

  const handleChatBoxClick = async (e) => {
    e.preventDefault();
    if (user) {
      let projectUser = "Unknown";
      let currentUser = user.uid;
      let currentUsername = "Unknown";
      let projectUsername = "Unknown";
      projectUser = projectData.uid;
      currentUsername = user.displayName;
      projectUsername = projectData.username;

      const chatID = [projectUser, currentUser].sort().join("-");
      const docRef = doc(db, "ChatBox", chatID);
      const docSnap = await getDoc(docRef);
      const userRef = doc(db, "Users", currentUser);
      const projectUserRef = doc(db, "Users", projectUser);
      const q = query(collection(db, "Users"), where("uid", "==", currentUser));
      if (docSnap.exists()) {
        // Document exists
        navigate("/message");
      } else {
        const docPayload = {
          users: [projectUser, currentUser],
          usernames: [projectUsername, currentUsername],
          lastAt: Date.now(),
          lastMessage: "No new message yet.",
        };
        const messageRef = doc(db, "Message", chatID);
        await setDoc(messageRef, { messages: [] });
        await setDoc(docRef, docPayload);
        if (userRef && projectUserRef) {
          await updateDoc(userRef, { chatBox: arrayUnion(chatID) });
          await updateDoc(projectUserRef, { chatBox: arrayUnion(chatID) });
        }
        console.log("Hi");
        navigate("/message");
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    getYourProject();
  }, [projectId]);

  return (
    <section className="yourProject">
      <div className="basicDescription">
        <div className="projectCard">
          <div
            type="text"
            name="basicDescriProjectName"
            className="yourProjectName"
            maxLength="40"
          >
            {projectData.basicDescriProjectName}
          </div>
          <div
            maxLength="600"
            type="text"
            name="basicDescriProjectDescription"
            className="yourProjectDescription"
          >
            {projectData.basicDescriProjectDescription}
          </div>
        </div>

        <div className="projectIntro">
          <div className="yourTeamIntro">
            <h4>{projectData.contactName}</h4>
            <div className="yourTeamIntroDetail">
              {projectData.basicDescriTeamIntro}
            </div>
            <div className="yourContactInfo">
              <div>
                <span>{projectData.contactEmail}</span>
                <br></br>
                <span>{projectData.contactMobile}</span>
              </div>
              <button
                type="button"
                className="cursor-pointer btn-chatbox-sender"
                onClick={handleChatBoxClick}
              >
                <ChatTextIcon />
              </button>
            </div>
            <div className="yourLocation">
              <span className="underline-controller">
                {basicDescriLocation}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="yourWantingSkills">
        <h4>Looking for a Collaboration with These Skills</h4>
        <div className="yourWantingSkill">
          <div className="yourWantingItem">{skillNeededSkills}</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
