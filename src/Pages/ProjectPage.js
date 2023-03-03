import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ChatTextIcon } from "../components/Icons";
import { ToolIcon } from "../components/Icons";
import { CategoryIcon } from "../components/Icons";

const ProjectPage = () => {
  const [projectData, setProjectData] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const { projectId } = useParams();
  const [basicDescriLocation, setBasicDescriLocation] = useState("");
  const [skillNeededSkills, setSkillNeededSkills] = useState("");
  const [categoryChoices, setCategoryChoices] = useState("");
  const navigate = useNavigate();

  const getYourProject = async () => {
    const yourProjectRef = doc(db, "Projects", projectId);
    const yourProjectDoc = await getDoc(yourProjectRef);
    if (yourProjectDoc.exists()) {
      const yourProjectData = yourProjectDoc.data();
      setProjectData(yourProjectData);
      setBasicDescriLocation(yourProjectData.basicDescriLocation.join(", "));
      setSkillNeededSkills(yourProjectData.skillNeededSkills.join(", "));
      setCategoryChoices(yourProjectData.categoryChoices.join(", "));
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
          <span>{projectData.submitTime}</span>
          <br />
          {projectData.budgetSettingCheck ? (
            projectData.budgetSettingBudgetInput ? (
              <span>Budget:{projectData.budgetSettingBudgetInput}</span>
            ) : (
              <span>Budget:$1,000</span>
            )
          ) : null}
        </div>

        <div className="projectIntro">
          <div className="yourTeamIntro">
            <Link to={`/profile/${projectData.uid}`}>
              <h4>{projectData.username}</h4>
            </Link>
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
      {skillNeededSkills && (
        <div className="yourWantingSkills">
          <div className="yourWantingSkillsTitle">
            <ToolIcon height="3rem" width="3rem" />
            <h4>Looking for These Skills</h4>
          </div>
          <div className="yourWantingSkill">
            <div className="yourWantingItem">{skillNeededSkills}</div>
          </div>
        </div>
      )}
      {categoryChoices && (
        <div className="yourCategoryChoices">
          <div className="yourCategoryChoicesTitle">
            <CategoryIcon width="3rem" height="3rem" />
            <h4>Category</h4>
          </div>
          <br />
          <div className="yourWantingItem">{categoryChoices}</div>
        </div>
      )}
    </section>
  );
};

export default ProjectPage;
