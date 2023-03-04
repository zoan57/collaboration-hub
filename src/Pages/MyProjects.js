import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { CategoryIcon } from "../components/ui/Icons";
import { ToolIcon } from "../components/ui/Icons";
import { TrashIcon } from "../components/ui/Icons";
import { DeleteDoc } from "../components/DeleteDoc";

const MyProjects = () => {
  const [user, loading, error] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState("");
  const [myProjects, setMyprojects] = useState(null);

  const getMyProjects = async () => {
    const projectRef = collection(db, "Projects");
    const projectQuery = query(projectRef, where("uid", "==", currentUser));
    const myProjectsQuery = await getDocs(projectQuery);
    const projects = [];
    if (myProjectsQuery) {
      myProjectsQuery.forEach((doc) => {
        const data = doc.data();
        projects.push({ id: doc.id, ...data });
      });
      if (projects !== null) {
        setMyprojects(projects);
      }
    }
  };

  const handleOnDeleteProject = async (collectionName, projectID) => {
    await DeleteDoc(collectionName, projectID);
    // fetch projects again from firestore
    const projectsRef = collection(db, collectionName);
    const projectQuery = query(projectsRef, where("uid", "==", currentUser));
    const snapshot = await getDocs(projectQuery);
    const updatedProjects = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setMyprojects(updatedProjects);
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    setCurrentUser(user.uid);
  }, [user, loading]);

  useEffect(() => {
    getMyProjects();
  }, [currentUser]);

  return (
    currentUser &&
    (myProjects === null ? (
      <section className="myprojects">
        {myProjects &&
          myProjects.map((project) => (
            <div className="myproject">
              <div className="mypr-top">
                <div>
                  <span>
                    <b>Project Name:</b>
                    {project.basicDescriProjectName}
                  </span>
                  <br />
                  <span>
                    <b>Date:</b>
                    {project.submitTime}
                  </span>
                  <br />
                  <span>
                    <b>Link:</b>
                    <Link to={`/project/${project.id}`} className="mypr-link">
                      <span>
                        https://collaborationhub2023.web.app/project/
                        {project.id}
                      </span>
                    </Link>
                  </span>
                </div>
                <Link to={`/project/${project.id}/edit`}>
                  <button className="btn">Edit</button>
                </Link>
              </div>
              <div className="mypr-category">
                <div>
                  <CategoryIcon width="1.5rem" height="1.5rem" />
                  <h5>Category</h5>
                </div>
                {project.categoryChoices.map((category) => {
                  return <span>{category}</span>;
                })}
              </div>
              <div className="mypr-skills">
                <div>
                  <ToolIcon width="1rem" height="1rem" />
                  <h5>Required Skills</h5>
                </div>
                {project.skillNeededSkills ? (
                  project.skillNeededSkills.map((skill) => {
                    return <span>{skill}</span>;
                  })
                ) : (
                  <span>No requirements</span>
                )}
              </div>
              <div
                onClick={() => handleOnDeleteProject("Projects", project.id)}
                className="mypr-btn-delete"
              >
                <TrashIcon width="25px" height="25px" />
              </div>
            </div>
          ))}
      </section>
    ) : (
      <section className="myprojects">
        <div className="mypr-no-projects">
          <h5>
            We don't have any projects yet. But hey, no worries, let's get yours
            added in!
          </h5>
          <Link to="/add-new-project">
            <button className="btn mypr-btn-addpr">
              Post your project here
            </button>
          </Link>
        </div>
      </section>
    ))
  );
};
export default MyProjects;
