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
import { CategoryIcon } from "../components/Icons";
import { ToolIcon } from "../components/Icons";

const MyProjects = () => {
  const [user, loading, error] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState();
  const [myProjects, setMyprojects] = useState([]);

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
      setMyprojects(projects);
      console.log(projects);
    }
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
    currentUser && (
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
            </div>
          ))}
      </section>
    )
  );
};
export default MyProjects;
