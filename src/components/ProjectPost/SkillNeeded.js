import React from "react";
import Dropdown from "../Dropdown";

const SkillNeeded = () => {
  const options = [
    { value: "html", label: "html" },
    { value: "css", label: "CSS" },
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "tailwind", label: "Tailwind" },
    { value: "rwd", label: "RWD" },
    { value: "python", label: "Python" },
    { value: "other", label: "Other" },
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