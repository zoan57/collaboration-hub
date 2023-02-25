import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const ProjectPage = () => {
  const [projectData, setProjectData] = useState([]);
  const { projectId } = useParams();
  const [basicDescriLocation, setBasicDescriLocation] = useState("");
  const [skillNeededSkills, setSkillNeededSkills] = useState("");

  let cachedProjects = JSON.parse(localStorage.getItem("projects"));
  const getYourProject = async () => {
    const yourProjectRef = doc(db, "Projects", projectId);
    const yourProjectDoc = await getDoc(yourProjectRef);
    if (yourProjectDoc.exists()) {
      const yourProjectData = yourProjectDoc.data();
      setProjectData(yourProjectData);
      setBasicDescriLocation(yourProject.basicDescriLocation.join(", "));
      setSkillNeededSkills(yourProject.skillNeededSkills.join(", "));
    } else {
      setProjectData("No such project!");
    }
  };
  const yourProject = cachedProjects.find(
    (project) => project.projectId === projectId
  );

  useEffect(() => {
    if (yourProject) {
      setProjectData(yourProject);
      setBasicDescriLocation(yourProject.basicDescriLocation.join(", "));
      setSkillNeededSkills(yourProject.skillNeededSkills.join(", "));
    } else {
      getYourProject();
    }
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
              <span>{projectData.contactEmail}</span>
              <br></br>
              <span>{projectData.concatMobile}</span>
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
