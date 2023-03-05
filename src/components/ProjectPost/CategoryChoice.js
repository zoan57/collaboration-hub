import React from "react";
import MultiSelectionChip from "../MultiSelectionChip";

const CategoryChoice = () => {
  const options = [
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
    { value: "Other", label: "Other" },
  ];
  return (
    <section className="addproject">
      <div className="categoryChoice">
        <h4>What categories are you working on?</h4>
      </div>
      <MultiSelectionChip
        options={options}
        dataValueName="categoryChoices"
        classNameOfList="multi-chip"
        classNameOfSelectedIcon="multi-select-icon"
      />
    </section>
  );
};

export default CategoryChoice;
