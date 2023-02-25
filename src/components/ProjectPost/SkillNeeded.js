import React from "react";
import Dropdown from "../Dropdown";

const SkillNeeded = () => {
  const options = [
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
  return (
    <section className="addproject">
      <div className="skillNeeded">
        <h4>Looking for a Collaboration with These Skills</h4>
        <Dropdown
          isMulti
          options={options}
          dataValueName="skillNeededSkills"
          placeholder="The skills you need"
          classNameOfList="skill-needed-list"
          classNameOfListOption="skill-needed-list-option"
        />
      </div>
    </section>
  );
};

export default SkillNeeded;