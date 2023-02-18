import React from "react";
import MultiSelectionChip from "../MultiSelectionChip";

const CategoryChoice = () => {
  const options = [
    { value: "machine learning", label: "Machine learning" },
    { value: "cloud computing", label: "Cloud computing" },
    { value: "microservices", label: "Microservices" },
    { value: "pwas", label: "PWAs" },
    { value: "serverless architecture", label: "Serverless Architecture" },
    { value: "jamstack", label: "Jamstack" },
    { value: "interactive art", label: "Interactive Art" },
    { value: "generative art", label: "Generative Art" },
    { value: "game", label: "Game" },
    { value: "ai", label: "AI" },
    { value: "devops", label: "DevOps" },
    { value: "problem solving", label: "Problem Solving" },
    { value: "mobile development", label: "Mobile Development" },
    { value: "e-commerce", label: "E-commerce" },
    { value: "data visualization", label: "Data Visualization" },
    { value: "seo", label: "SEO" },
    { value: "cybersecurity", label: "Cybersecurity" },
  ];
  return (
    <section className="addproject">
      <div className="categoryChoice">
        <h4>What categories are you working on?</h4>
      </div>
      <MultiSelectionChip options={options} classNameOfList="multi-chip"/>
    </section>
  );
};

export default CategoryChoice;
