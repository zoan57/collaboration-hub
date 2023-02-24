import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";

const Project = () => {
  const [projectData, setProjectData] = useState([]);

  async function getProjects() {
    const querySnapshot = await getDocs(collection(db, "Projects"));
    const projects = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      projects.push(data);
    });
    setProjectData(projects);
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("projectsLastFetched", new Date().getTime());
  }

  function TruncateText(props) {
    const maxLength = props.maxLength;
    let truncatedText = props.text;

    if (truncatedText.length > maxLength) {
      // find the last space in the truncated text
      const lastSpaceIndex = truncatedText.lastIndexOf(" ", maxLength - 3);
      // truncate the text at the last space and add "..."
      truncatedText = truncatedText.substring(0, lastSpaceIndex) + "...";
    }

    return <div>{truncatedText}</div>;
  }
  useEffect(() => {
    // Check if the query results are already saved in localStorage
    let cachedProjects = JSON.parse(localStorage.getItem("projects"));
    // If the cache data, use the cached data
    if (cachedProjects) {
      setProjectData(cachedProjects);
      console.log("cached data");
      console.log("Here is the ");
      console.log(cachedProjects);
    } else {
      getProjects();
      console.log("fetched data");
    }

    // Listen for real-time updates to the Projects collection
    const projectCollection = collection(db, "Projects");
    let lastFetched = parseInt(localStorage.getItem("projectsLastFetched"));

    const q = query(
      projectCollection,
      where("lastFetchedTimeCount", ">", lastFetched),
      orderBy("lastFetchedTimeCount", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let newProjects = [];
      let cachedProjects = JSON.parse(localStorage.getItem("projects")) || [];
      snapshot.docChanges().forEach((change) => {
        const data = change.doc.data();
        const projectId = change.doc.id;
        switch (change.type) {
          case "added":
            // Add the new project to the local cache and state
            if (data) {
              newProjects.push(data);
              console.log(`Added changes`);
              console.log(newProjects);
            }
            break;
          case "modified":
            // Update the project in the local cache and state
            setProjectData((prevProjects) =>
              prevProjects.map((project) =>
                project.id === projectId ? data : project
              )
            );
            cachedProjects = cachedProjects.map((project) =>
              project.id === projectId ? data : project
            );
            break;
          case "removed":
            // Remove the project from the local cache and state
            setProjectData((prevProjects) =>
              prevProjects.filter((project) => project.id !== projectId)
            );
            cachedProjects = cachedProjects.filter(
              (project) => project.id !== projectId
            );
            break;
          default:
            console.log(`Unknown change type: ${change.type}`);
        }
      });
      // Merge the new projects with the existing cached projects
      const mergedProjects = [...cachedProjects, ...newProjects];
      setProjectData(mergedProjects);
      localStorage.setItem("projects", JSON.stringify(mergedProjects));
      localStorage.setItem("projectsLastFetched", Date.now().toString());
    });

    // Use the cached projects if available
    cachedProjects = JSON.parse(localStorage.getItem("projects"));
    if (cachedProjects) {
      setProjectData(cachedProjects);
    }

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);
  const CategoryOptions = [
    { value: "Machine Learning" },
    { value: "Cloud Computing" },
    { value: "Microservices" },
    { value: "PWAs" },
    { value: "Serverless Architecture" },
    { value: "Jamstack" },
    { value: "Interactive Art" },
    { value: "Generative Art" },
    { value: "Game" },
    { value: "AI" },
    { value: "DevOps" },
    { value: "Problem Solving" },
    { value: "Mobile Development" },
    { value: "E-Commerce" },
    { value: "Data Visualization" },
    { value: "SEO" },
    { value: "Cybersecurity" },
  ];
  return (
    <div>
      <section className="project">
        <aside className="project-sidebar">
          {CategoryOptions.map((option) => (
            <div className="btn-project-category-opt">{option.value}</div>
          ))}
        </aside>
        <section className="project-main">
          <div className="project-main-to-add">
            <span>Hey, let's get that new project added!</span>
            <Link to="/add-new-project">
              <button text="Post" className="btn btn-project-add">
                POST
              </button>
            </Link>
          </div>
          <div className="pr-main-list">
            <div className="project-main-grid">
              <div className="pr-lists pr-recmd">
                <h4>All Your Matches</h4>
              </div>
              <div className="pr-lists pr-recmd">
                <h4>Projects Added this Week</h4>
              </div>
              <div className="pr-lists pr-recmd ">
                <h4>Something Interesting</h4>
              </div>
            </div>
            <div className="project-main-grid">
              {projectData.map((project, index) => (
                <div className="pr-lists" key={index}>
                  <div className="pr-card-inner">
                    <div className="pr-card-front">
                      <h4 className="pr-title">
                        {project.basicDescriProjectName}
                      </h4>
                      <span className="pr-team">{project.username}</span>
                      <br></br>
                      <span className="pr-publish-time">{project.submitTime}</span>
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
          </div>
        </section>
      </section>
    </div>
  );
};

export default Project;
