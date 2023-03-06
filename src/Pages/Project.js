import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  limit,
  doc,
  where,
  orderBy,
} from "firebase/firestore";
import TruncateText from "../components/TruncateText";
import { CollapseToOnIcon } from "../components/ui/Icons";
import Favorites from "./Favorites";
import AI from "./AI";
import { PopOut } from "../components/PopOut";

const Project = () => {
  //If projects are not sorted
  const [allowAllProjects, setAllowAllProjects] = useState(true);
  const [allowLatestProjects, setAllowLatestProjects] = useState(false);
  const [allowSomeOtherProjects, setAllowSomeOtherProjects] = useState(false);

  const [projectData, setProjectData] = useState([]); //all projects
  const [currentUser, setCurrentUser] = useState("");
  const [numProjects, setNumProjects] = useState(3);
  const [numSomeProjects, setNumSomeProjects] = useState(3);
  const bottomOfList = useRef(null);
  const navigate = useNavigate();
  //Define current user
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      setCurrentUser(user.uid);
    }
  }, [user, loading]);

  //Filter projects in one week
  const latestProjectsFilter = projectData.filter((data) => {
    if (Date.now() - data.lastFetchedTimeCount < 7 * 24 * 60 * 60 * 1000) {
      return true;
    }
    return false;
  });
  const handleLatestProjects = () => {
    setAllowAllProjects(true);
    setProjectData(latestProjectsFilter);
    setAllowSomeOtherProjects(false);
    console.log(latestProjectsFilter);
  };

  // Handle some interesting projects (category other)
  async function getSomeOtherProjects() {
    const projectsRef = collection(db, "Projects");
    const q = query(
      projectsRef,
      limit(numSomeProjects),
      where("categoryChoices", "array-contains-any", ["Other"])
    );
    const querySnapshot = await getDocs(q);
    const projects = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      projects.push(data);
    });
    setProjectData(projects);
    setAllowAllProjects(false);
    setAllowLatestProjects(false);
    setAllowSomeOtherProjects(true);
  }

  //navigate to certain project page
  const handleProjectClick = (projectId) => {
    // Construct the URL for the project page
    const url = `/project/${projectId}`;
    // Navigate to the project page using React Router
    navigate(url);
  };

  //Fetch data from firestore, if no cache data
  async function getProjects() {
    const projectsRef = collection(db, "Projects");
    const q = query(
      projectsRef,
      limit(numProjects),
      orderBy("lastFetchedTimeCount", "desc")
      // where("skillNeededSkills", "array-contains-any", [
      //   "Other",
      //   "other",
      //   "python",
      // ])
    );
    const querySnapshot = await getDocs(q);
    const projects = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      projects.push(data);
    });
    setProjectData(projects);
    setAllowAllProjects(true);
    setAllowLatestProjects(false);
    setAllowSomeOtherProjects(false);
  }
  useEffect(() => {
    getProjects();
    if (currentUser) {
      setAllowAllProjects(true);
      setAllowSomeOtherProjects(false);
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
  }, [numProjects]);

  useEffect(() => {
    handleLatestProjects();
  }, []);

  const handleCollapse = () => {
    if (allowAllProjects) {
      setNumProjects(numProjects + 3);
    }
    if (allowSomeOtherProjects) {
      setNumSomeProjects(numSomeProjects + 3);
    }
  };
  useEffect(() => {
    bottomOfList.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [projectData]);

  return (
    <div>
      {!user && (
        <PopOut delay="1000">
          <h2>Haven't logged in yet? Let's get started!</h2>
        </PopOut>
      )}
      <section className="project">
        <section className="project-main">
          {user && (
            <div className="project-main-to-add">
              <h4>
                Welcome back{user.displayName && `, ${user.displayName}`}{" "}
              </h4>
              <div className="project-main-to-add-txt">
                <span>Hey, let's get that new project added!</span>
                <Link to="/add-new-project">
                  <button text="Post" className="btn btn-project-add">
                    POST
                  </button>
                </Link>
              </div>
            </div>
          )}
          <div className="pr-main-list">
            <div className="project-recmd-grid">
              <div className="pr-recmd" onClick={() => getProjects()}>
                <h4>All Projects</h4>
              </div>
              <div
                className="pr-recmd"
                onClick={() => {
                  handleLatestProjects();
                }}
              >
                <h4>Projects this Week</h4>
              </div>
              <div className="pr-recmd" onClick={() => getSomeOtherProjects()}>
                <h4>Something Interesting</h4>
              </div>
            </div>
            <div className="project-main-grid">
              {allowAllProjects &&
                projectData
                  .sort((first, second) =>
                    first.lastFetchedTimeCount <= second.lastFetchedTimeCount
                      ? 1
                      : -1
                  )
                  .map((project, index) => (
                    <div
                      className="pr-lists"
                      key={index}
                      onClick={() => handleProjectClick(project.projectId)}
                    >
                      <div className="pr-card-inner">
                        <div className="pr-card-front">
                          <h4 className="pr-title">
                            {project.basicDescriProjectName}
                          </h4>
                          <div className="pr-card-intro">
                            <span className="pr-team ">{project.username}</span>
                            <span className="pr-publish-time">
                              {project.submitTime}
                            </span>
                          </div>
                          <div className="pr-cateory-tag-list">
                            {project.categoryChoices.map((category) => {
                              return (
                                <span className="pr-cateory-tag">
                                  #{category}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                        <div className="pr-card-back">
                          <p className="pr-description">
                            <TruncateText
                              maxLength={200}
                              text={project.basicDescriProjectDescription}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

              {allowLatestProjects &&
                projectData.map((project, index) => (
                  <div
                    className="pr-lists"
                    key={index}
                    onClick={() => handleLatestProjects(project.projectId)}
                  >
                    <div className="pr-card-inner">
                      <div className="pr-card-front">
                        <h4 className="pr-title">
                          {project.basicDescriProjectName}
                        </h4>
                        <div className="pr-card-intro">
                          <span className="pr-team ">{project.username}</span>
                          <span className="pr-publish-time">
                            {project.submitTime}
                          </span>
                        </div>
                        <div className="pr-cateory-tag-list">
                          {project.categoryChoices.map((category) => {
                            return (
                              <span className="pr-cateory-tag">
                                #{category}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      <div className="pr-card-back">
                        <p className="pr-description">
                          <TruncateText
                            maxLength={200}
                            text={project.basicDescriProjectDescription}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div onClick={handleCollapse} className="pr-collapse-on-svg">
              <CollapseToOnIcon
                width="30px"
                height="30px"
                transform="rotate(70)"
              />
            </div>
          </div>
        </section>
      </section>
      <div ref={bottomOfList}></div>
      <br />
      <br />
      <br />
      <hr />
      {!user ? null : (
        <section>
          <Favorites />
          <hr />
          <AI />
        </section>
      )}
    </div>
  );
};

export default Project;
