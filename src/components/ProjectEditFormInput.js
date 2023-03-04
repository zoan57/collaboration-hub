import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import usePostFormContext from "../hook/usePostFormContext";
import { doc, getDoc } from "firebase/firestore";
import Dropdown from "./Dropdown";
import { ToolIcon } from "./ui/Icons";
import { CategoryIcon } from "./ui/Icons";
import MultiSelectionChip from "./MultiSelectionChip";

export const ProjectEditFormInput = () => {
  const { data, setData, handleChange } = usePostFormContext();
  const [user, loading, error] = useAuthState(auth);
  const [currentUserId, setCurrentUserId] = useState("");
  const projectId = useParams().projectId;
  const navigate = useNavigate("/projects");
  const [currentData, setCurrentData] = useState([]);
  const [updateData, setUpdateData] = useState([]);
  const LocationOptions = [
    { value: "Taipei", label: "Taipei" },
    { value: "New York", label: "New York" },
    { value: "London", label: "London" },
    { value: "Berlin", label: "Berlin" },
    { value: "Sydney", label: "Sydney" },
    { value: "Tokyo", label: "Tokyo" },
    { value: "Seoul", label: "Seoul" },
    { value: "Remote", label: "Remote" },
    { value: "Other", label: "Other" },
  ];
  const SkillOptions = [
    { value: "HTML", label: "html" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Vue", label: "Vue" },
    { value: "Angular", label: "Angular" },
    { value: "Tailwind", label: "Tailwind" },
    { value: "RWD", label: "RWD" },
    { value: "Python", label: "Python" },
    { value: "Illustrator", label: "Illustrator" },
    { value: "Photoshop", label: "Photoshop" },
    { value: "Figma", label: "Figma" },
    { value: "ADOBE XD", label: "ADOBE XD" },
    { value: "Other", label: "Other" },
  ];
  const CategoryOptions = [
    { value: "Machine Learning", label: "Machine learning" },
    { value: "Cloud Computing", label: "Cloud computing" },
    { value: "Microservices", label: "Microservices" },
    { value: "PWAs", label: "PWAs" },
    { value: "Serverless Architecture", label: "Serverless Architecture" },
    { value: "Jamstack", label: "Jamstack" },
    { value: "Interactive Art", label: "Interactive Art" },
    { value: "Generative Art", label: "Generative Art" },
    { value: "Game", label: "Game" },
    { value: "AI", label: "AI" },
    { value: "DevOps", label: "DevOps" },
    { value: "Problem Solving", label: "Problem Solving" },
    { value: "Mobile Development", label: "Mobile Development" },
    { value: "E-Commerce", label: "E-commerce" },
    { value: "Data Visualization", label: "Data Visualization" },
    { value: "SEO", label: "SEO" },
    { value: "Cybersecurity", label: "Cybersecurity" },
  ];
  const projectRef = doc(db, "Projects", projectId);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user.uid) {
      setCurrentUserId(user.uid);
    }
  }, [user, loading]);

  // Check if the user is the project owner
  useEffect(() => {
    if (currentUserId && currentData.uid) {
      if (currentUserId !== currentData.uid) {
        navigate("/projects");
      }
    }
  }, [currentUserId, currentData]);

  //Get current data
  const getOriginalData = async () => {
    const originalData = await getDoc(projectRef);
    const fetchedData = [];
    if (originalData.exists()) {
      setCurrentData({ id: originalData.id, ...originalData.data() });
    }
  };
  useEffect(() => {
    getOriginalData();
    console.log(data);
  }, [projectId]);

  return (
    <section className="yourProject">
      <div className="basicDescription">
        <div className="projectCard">
          <input
            contentEditable="true"
            type="text"
            name="basicDescriProjectName"
            value={data.basicDescriProjectName}
            onChange={handleChange}
            className="yourProjectName"
            maxLength="40"
            placeholder={
              currentData.basicDescriProjectName || "Enter your project name"
            }
          ></input>
          <textarea
            contentEditable="true"
            maxLength="600"
            type="text"
            name="basicDescriProjectDescription"
            value={data.basicDescriProjectDescription}
            placeholder={
              currentData.basicDescriProjectDescription ||
              "Enter your project description"
            }
            className="yourProjectDescription project-edit-descr"
            onInput={handleChange}
          ></textarea>
          <br />
          <span>
            Budget:
            <input
              placeholder={
                currentData.budgetSettingBudgetInput || "Set up your budget"
              }
              name="budgetSettingBudgetInput"
              value={data.budgetSettingBudgetInput}
              onChange={handleChange}
            />
          </span>
          <br />
          <i>Leave the budget empty if you don't have one.</i>
          <br />
        </div>

        <div className="projectIntro">
          <div className="yourTeamIntro">
            <h4>{currentData.username}</h4>
            <textarea
              className="yourTeamIntroDetail"
              placeholder={
                currentData.basicDescriTeamIntro ||
                "Let us know more about you or your team!"
              }
              name="basicDescriTeamIntro"
              value={data.basicDescriTeamIntro}
              onChange={handleChange}
            ></textarea>
            <div className="yourContactInfo">
              <div className="project-edit-contact">
                <input
                  className="inputbar-long project-edit-contact-input dec-txt"
                  name="contactEmail"
                  value={data.contactEmail}
                  onChange={handleChange}
                  placeholder={
                    currentData.contactEmail ||
                    "collaborationhub2023@collab.org"
                  }
                />
                <br />
                <input
                  className="inputbar-long project-edit-contact-input dec-txt"
                  name="contactMobile"
                  value={data.contactMobile}
                  onChange={handleChange}
                  placeholder={currentData.contactMobile || "+1 (555) 555-5555"}
                />
              </div>
            </div>
            <div className="yourLocation">
              <Dropdown
                placeholder="Your Location"
                options={LocationOptions}
                dataValueName="basicDescriLocation"
                isMulti
                classNameOfDiv="project-edit-location"
                classNameOfList="location-list"
                classNameOfListOption="location-list-option"
              />
            </div>
          </div>
        </div>
      </div>
      {currentData.skillNeededSkills && (
        <div className="yourWantingSkills">
          <div className="yourWantingSkillsTitle">
            <ToolIcon height="3rem" width="3rem" />
            <h4>Looking for These Skills</h4>
          </div>
          <div className="yourWantingSkill">
            <Dropdown
              isMulti
              options={SkillOptions}
              dataValueName="skillNeededSkills"
              placeholder="The skills you need"
              classNameOfList="skill-needed-list"
              classNameOfListOption="skill-needed-list-option"
            />
          </div>
        </div>
      )}
      {currentData.categoryChoices && (
        <div className="yourCategoryChoices">
          <div className="yourCategoryChoicesTitle">
            <CategoryIcon width="3rem" height="3rem" />
            <h4>Category</h4>
          </div>
          <br />
          <div className="yourWantingItem">
            <MultiSelectionChip
              options={CategoryOptions}
              dataValueName="categoryChoices"
              classNameOfList="multi-chip"
              classNameOfSelectedIcon="multi-select-icon"
            />
          </div>
        </div>
      )}
    </section>
  );
};
