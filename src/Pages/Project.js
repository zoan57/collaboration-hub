import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import TruncateText from "../components/TruncateText";

const Project = () => {
   //If projects are not sorted
   const [allowAllProjects, setAllowAllProjects] = useState(true);
   const [allowLatestProjects, setAllowLatestProjects] = useState(false);
   const [projectData, setProjectData] = useState([]); //all projects
   const [currentUser, setCurrentUser] = useState("");
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
    setAllowAllProjects(false);
    setAllowLatestProjects(true);
    console.log(latestProjectsFilter);
  };

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
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("projectsLastFetched", new Date().getTime());
    let lastFetched = parseInt(localStorage.getItem("projectsLastFetched"));
  }
  useEffect(() => {
    getProjects();
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
    /*async function fetchProjects() {
      // Check if the query results are already saved in localStorage
      let cachedProjects = JSON.parse(localStorage.getItem("projects"));
      let lastFetched = parseInt(localStorage.getItem("projectsLastFetched"));
      // If the cache data, use the cached data
      if (cachedProjects && new Date().getTime() - lastFetched < 28800000) {
        setProjectData(cachedProjects);
        console.log("cached data");
      } else {
        await getProjects();
        console.log("fetched data");
      }
      
      // Listen for real-time updates to the Projects collection
      const projectCollection = collection(db, "Projects");
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
              console.log(`Modified changes`);
              break;
            case "removed":
              // Remove the project from the local cache and state
              setProjectData((prevProjects) =>
                prevProjects.filter((project) => project.id !== projectId)
              );
              cachedProjects = cachedProjects.filter(
                (project) => project.id !== projectId
              );
              console.log(`Removed changes`);
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
    }
    fetchProjects();*/
  }, []);

  return (
    <div>
      <section className="project">
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
            <div className="project-recmd-grid">
              <div className="pr-recmd" onClick={() => getProjects()}>
                <h4>All Your Matches</h4>
              </div>
              <div
                className="pr-recmd"
                onClick={() => {
                  handleLatestProjects();
                }}
              >
                <h4>Projects this Week</h4>
              </div>
              <div className="pr-recmd">
                <h4>Something Interesting</h4>
              </div>
            </div>
            <div className="project-main-grid">
              {allowAllProjects &&
                projectData
                  .sort((first, second) =>
                    first.lastFetchedTimeCount <= second.lastFetchedTimeCount ? 1 : -1
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
                          <span className="pr-team">{project.username}</span>
                          <br></br>
                          <span className="pr-publish-time">
                            {project.submitTime}
                          </span>
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
                latestProjectsFilter.map((project, index) => (
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
                        <span className="pr-team">{project.username}</span>
                        <br></br>
                        <span className="pr-publish-time">
                          {project.submitTime}
                        </span>
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
