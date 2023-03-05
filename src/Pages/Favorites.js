import React, { useState, useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  getDocs,
  updateDoc,
  collection,
  where,
  query,
  orderBy,
  limit,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";
import TruncateText from "../components/TruncateText";

import { Link, useNavigate } from "react-router-dom";
import { AvatarIcon } from "../components/ui/Icons";
import { ProjectsIcon } from "../components/ui/Icons";
import { CategoryIcon } from "../components/ui/Icons";
import { TrashIcon } from "../components/ui/Icons";
import { ToolIcon } from "../components/ui/Icons";
import { FacebookIcon } from "../components/ui/Icons";
import { InstagramIcon } from "../components/ui/Icons";
import { LinkIcon } from "../components/ui/Icons";
import { HeartIcon } from "../components/ui/Icons";

const Favorites = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [projectData, setProjectData] = useState([]);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isChecked, setIsChecked] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  //Check currentUser
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      setCurrentUser(user.uid);
    }
    if (!user) {
      navigate("/");
    }
  }, [user, loading]);

  //Get ID of favorite projects and users
  useEffect(() => {
    if (currentUser) {
      const currentUserRef = doc(db, "Users", currentUser);
      let unsub = onSnapshot(currentUserRef, (doc) => {
        if (doc.data()) {
          const users = doc.data().myFavoriteUsers;
          const projects = doc.data().myFavoriteProjects;
          setUsers(users);
          setProjects(projects);
        }
      });
      return () => {
        unsub();
      };
    }
  }, [currentUser]);
  //Get favorite projects and users
  useEffect(() => {
    if (users.length > 0) {
      const favUsers = [];
      const getUserDocs = users.map((uid) => getDoc(doc(db, "Users", uid)));
      Promise.all(getUserDocs).then((docs) => {
        docs.forEach((doc) => {
          if (doc.data()) {
            favUsers.push(doc.data());
          }
        });
        setUserData(favUsers);
      });
    }
  }, [users]);

  const handlProjectOnClick = async () => {
    if (projects.length > 0) {
      setIsChecked(false);
      const favProjects = [];
      const getProjectDocs = projects.map((projectId) =>
        getDoc(doc(db, "Projects", projectId))
      );
      Promise.all(getProjectDocs).then((docs) => {
        docs.forEach((doc) => {
          if (doc.data()) {
            favProjects.push({ id: doc.id, ...doc.data() });
          }
        });
        setUserData(favProjects);
        console.log(favProjects);
      });
    }
  };
  const handlUserOnClick = async () => {
    if (users.length > 0) {
      setIsChecked(true);
      const favUsers = [];
      const getUsersDocs = users.map((userId) =>
        getDoc(doc(db, "Users", userId))
      );
      Promise.all(getUsersDocs).then((docs) => {
        docs.forEach((doc) => {
          if (doc.data()) {
            favUsers.push({ id: doc.id, ...doc.data() });
          }
        });
        setUserData(favUsers);
        console.log(favUsers);
      });
    }
  };

  useEffect(() => {
    if (projects.length > 0) {
      const favProjects = [];
      const getProjectDocs = projects.map((projectId) =>
        getDoc(doc(db, "Projects", projectId))
      );
      Promise.all(getProjectDocs).then((docs) => {
        docs.forEach((doc) => {
          if (doc.data()) {
            favProjects.push({ id: doc.id, ...doc.data() });
          }
        });
        console.log(favProjects);
        setProjectData(favProjects);
      });
    }
  }, [projects]);

  // Handle unsubscribe
  const handleProjectUnsubscribe = async (userId, projectId) => {
    const userRef = doc(db, "Users", userId);
    if (userRef) {
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        await updateDoc(userRef, {
          myFavoriteProjects: arrayRemove(projectId),
        });
      }
    }
  };
  const handleUserUnsubscribe = async (userId, selectedUserId) => {
    const userRef = doc(db, "Users", userId);
    if (userRef) {
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        await updateDoc(userRef, {
          myFavoriteUsers: arrayRemove(selectedUserId),
        });
      }
    }
  };

  return (
    <main className="favorites">
      <div className="fav-title">
        <h4 className="dec-txt">Subscriptions</h4>
        <div className="fav-svg-box">
          <div onClick={handlUserOnClick}>
            <AvatarIcon
              width="60px"
              height="60px"
              className={`fav-title-svg ${
                !isChecked ? "fav-icon-color-not-checked" : "fav-icon-color-checked"
              }`}
            />
          </div>
          <div onClick={handlProjectOnClick}>
            <ProjectsIcon
              width="60px"
              height="60px"
              className={`fav-title-svg ${
                isChecked ? "fav-icon-color-not-checked" : "fav-icon-color-checked"
              }`}
            />
          </div>
        </div>
      </div>
      <section className="fav-lists">
        {!isChecked && (
          <div className="fav-lists-projects">
            {projectData.length > 0 ? (
              projectData.map((doc) => (
                <div className="fav-project">
                  <div className="mypr-top">
                    <div>
                      <span>
                        <b>Project Name:</b>
                        {doc.basicDescriProjectName || "Unknown"}
                      </span>
                      <br />
                      <b>Posted by</b>
                      <span>{doc.username || "Not provided"}</span>
                      <br />
                      <span>
                        <b>Date:</b>
                        {doc.submitTime || "No Date"}
                      </span>
                      <br />
                      <span>
                        <b>Link:</b>
                        <Link to={`/project/${doc.id}`} className="mypr-link">
                          <span>
                            https://collaborationhub2023.web.app/project/
                            {doc.id}
                          </span>
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="mypr-category">
                    <div>
                      <CategoryIcon width="1.5rem" height="1.5rem" />
                      <h5>Category</h5>
                    </div>
                    {doc.categoryChoices.map((category) => {
                      return <span>{category}</span>;
                    })}
                  </div>
                  <div className="mypr-skills">
                    <div>
                      <ToolIcon width="1rem" height="1rem" />
                      <h5>Required Skills</h5>
                    </div>
                    {doc.skillNeededSkills ? (
                      doc.skillNeededSkills.map((skill) => {
                        return <span>{skill}</span>;
                      })
                    ) : (
                      <span>No requirements</span>
                    )}
                  </div>
                  <div
                    className="mypr-btn-delete"
                    onClick={() =>
                      handleProjectUnsubscribe(currentUser, doc.id)
                    }
                  >
                    <TrashIcon width="25px" height="25px" />
                  </div>
                </div>
              ))
            ) : (
              <div>You haven't subscribed to any projects yet!</div>
            )}
          </div>
        )}
        {isChecked && (
          <div className="fav-lists-users">
            {userData.length > 0 ? (
              userData.map((user) => (
                <div className="fav-user">
                  <div className="fav-user-info">
                    <div className="fav-user-avatar">
                      <img src="/images/logo-sm.png" className="logo-sm" />
                      <h5>{user.name}</h5>
                    </div>
                    <div>
                      <Link
                        to={`https://www.facebook.com${user.facebook}`}
                        target="_blank"
                      >
                        <FacebookIcon width="30px" height="30px" />
                      </Link>
                      <Link
                        to={`https://www.instagram.com${user.instagram}`}
                        target="_blank"
                      >
                        <InstagramIcon width="30px" height="30px" />
                      </Link>
                      <Link to={`${user.otherLink}`} target="_blank">
                        <LinkIcon width="30px" height="30px" />
                      </Link>
                    </div>
                  </div>
                  <div
                    className="mypr-btn-delete"
                    onClick={() => handleUserUnsubscribe(currentUser, user.uid)}
                  >
                    <TrashIcon width="25px" height="25px" />
                  </div>
                  <div className="fav-user-intro">
                    <h5>Introduction</h5>
                    <span>
                      {user.introduction && (
                        <TruncateText
                          maxLength="120"
                          text={user.introduction}
                        />
                      )}
                    </span>
                    <h5>Project/Field Interests</h5>
                    <span>
                      {user.projectInterests && (
                        <TruncateText
                          maxLength="120"
                          text={user.projectInterests}
                        />
                      )}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div>You haven't subscribed to any users yet!</div>
            )}
          </div>
        )}
      </section>
    </main>
  );
};

export default Favorites;
