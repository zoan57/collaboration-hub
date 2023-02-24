import React from "react";
import Dropdown from "../Dropdown";
import usePostFormContext from "../../hook/usePostFormContext";
import ButtonAdd from "../button-add";

const BasicDescription = () => {
  const { data, handleChange } = usePostFormContext();
  const options = [
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
  return (
    <section className="addproject">
      <div className="addpr-welcome">
        <div className="addpr-welcome-txt">
          <img src="/images/logo-sm.png" className="logo-sm"></img>
          <span>Wirte something about your project.</span>
        </div>
      </div>
      <div className="addpr-form">
        <div className="addpr-card">
          <input
            type="text"
            name="basicDescriProjectName"
            value={data.basicDescriProjectName}
            onChange={handleChange}
            placeholder="Enter your project name here"
            className="basicDescri-project-name"
            maxLength="40"
          ></input>
          <textarea
            maxLength="600"
            type="text"
            name="basicDescriProjectDescription"
            value={data.BasicDescriProjectDescription}
            onChange={handleChange}
            placeholder="Please describe your project purpose and who you want to collaborate
            with. The content should be no more than 600 words.&#10;&#10;For example, my project's purpose is to create a platform for collaboration between individuals and organizations. I am looking for partners who are passionate about making a positive impact in their communities and who are willing to share their knowledge and resources. I am excited to collaborate with like-minded individuals and organizations to make a positive impact in our communities. Together, we can create something that will benefit us all."
            className="basicDescri-project-description"
          ></textarea>
        </div>
        <div className="addpr-card-left">
          <Dropdown
            placeholder="Your Location"
            options={options}
            dataValueName="basicDescriLocation"
            isMulti
            classNameOfList="location-list"
            classNameOfListOption="location-list-option"
          />
          <div className="addpr-intro">
            <h4>About you/team</h4>
            <div>
              <textarea
                type="text"
                name="basicDescriTeamIntro"
                value={data.basicDescriTeamIntro}
                onChange={handleChange}
                placeholder="We would like to have a better understanding of your team.&#10;Please provide us with a brief description of your team, including their skills, experience, and any other relevant information.&#10;The content should be no more than 200 words."
                className="basicDescri-team-intro"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BasicDescription;
