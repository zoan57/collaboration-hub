import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  query,
  where,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ChatTextIcon } from "../components/ui/Icons";
import { ToolIcon } from "../components/ui/Icons";
import { CategoryIcon } from "../components/ui/Icons";

const ProjectPage = () => {
  const [projectData, setProjectData] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const { projectId } = useParams();
  const [basicDescriLocation, setBasicDescriLocation] = useState("");
  const [skillNeededSkills, setSkillNeededSkills] = useState("");
  const [categoryChoices, setCategoryChoices] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [subscribeAnimating, setSubscribeAnimating] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      setCurrentUser(user.uid);
    }
  }, [currentUser, loading]);
  const getYourProject = async () => {
    const yourProjectRef = doc(db, "Projects", projectId);
    const yourProjectDoc = await getDoc(yourProjectRef);
    if (yourProjectDoc.exists()) {
      const yourProjectData = yourProjectDoc.data();
      setProjectData({ ...yourProjectData, id: yourProjectDoc.id });
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
        navigate("/message");
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    getYourProject();
  }, [projectId]);

  //To subscribe someone
  const handleSubscribeClick = async () => {
    if (!subscribeAnimating && projectData && currentUser) {
      await updateDoc(doc(db, "Users", currentUser), {
        myFavoriteProjects: arrayUnion(projectData.id),
      });
      setSubscribeAnimating(true);
      console.log("subscribe");
    } else if (subscribeAnimating && projectData && currentUser) {
      await updateDoc(doc(db, "Users", currentUser), {
        myFavoriteProjects: arrayRemove(projectData.id),
      });
      setSubscribeAnimating(false);
      console.log("unsubscribe");
    }
  };
  useEffect(() => {
    if (currentUser) {
      let unsub = onSnapshot(doc(db, "Users", currentUser), (doc) => {
        if (doc.data()) {
          const favorites = doc.data().myFavoriteProjects;
          const containsProjectID = favorites.includes(projectData.id);
          if (containsProjectID) {
            setSubscribeAnimating(true);
          }
        }
      });
      return () => {
        unsub();
      };
    }
  }, [currentUser, subscribeAnimating, projectData]);

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
            {projectData.basicDescriProjectName || "Unknown"}
          </div>
          <div
            maxLength="600"
            type="text"
            name="basicDescriProjectDescription"
            className="yourProjectDescription"
          >
            {projectData.basicDescriProjectDescription ||
              "This section does not contain any message."}
          </div>
          <span>{projectData.submitTime || "unknown"}</span>
          <br />
          {projectData.budgetSettingCheck ? (
            projectData.budgetSettingBudgetInput ? (
              <span>Budget:{projectData.budgetSettingBudgetInput}</span>
            ) : (
              <span>Budget:$1,000</span>
            )
          ) : null}
          <br />
          <br />
          <br />
          <div className="projectCard-bottom">
            <h4>
              Posted by:
              <b>
                <Link to={`/profile/${projectData.uid}`}>
                  {projectData.username}
                </Link>
              </b>
            </h4>
            <div className="profile-subscribe">
              <div
                onClick={handleSubscribeClick}
                className={`HeartAnimation ${
                  subscribeAnimating ? "heart-animate" : ""
                }`}
              ></div>
              <span>{`${subscribeAnimating?("Subscribed"):("Subscribe")}`}</span>
            </div>
          </div>
        </div>

        <div className="projectIntro">
          <div className="yourTeamIntro">
            {user ? (
              <h4>
                {projectData.contactName || (
                  <Link to={`/profile/${projectData.uid}`}>
                    {projectData.username}
                  </Link>
                )}
              </h4>
            ) : (
              <h4>****</h4>
            )}

            <div className="yourTeamIntroDetail">
              {projectData.basicDescriTeamIntro ||
                "This section does not contain any message."}
            </div>
            <div className="yourContactInfo">
              <div>
                {user ? (
                  <span>
                    {projectData.contactEmail || "No contact email provided."}
                  </span>
                ) : (
                  <span>******@****.***</span>
                )}
                <br></br>
                {user ? (
                  <span>{projectData.contactMobile}</span>
                ) : (
                  <span>+**********</span>
                )}
              </div>
              <button
                type="button"
                className="cursor-pointer btn-chatbox-sender"
                onClick={handleChatBoxClick}
              >
                <ChatTextIcon width="30px" height="30px" />
              </button>
            </div>
            <div className="yourLocation">
              <span className="underline-controller">
                {basicDescriLocation || "Location not provided."}
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
