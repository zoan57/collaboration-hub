import React from "react";
import Dropdown from "../Dropdown";
import ButtonAdd from "../button-add";

const BasicDescription = () => {
  const options = [
    { value: "taipei", label: "Taipei" },
    { value: "ny", label: "New York" },
    { value: "london", label: "London" },
    { value: "berlin", label: "Berlin" },
    { value: "sydney", label: "Sydney" },
    { value: "tokyo", label: "Tokyo" },
    { value: "seoul", label: "Seoul" },
    { value: "remote", label: "Remote" },
    { value: "other", label: "Other" },
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
            placeholder="Enter your project name here"
            className="basicDescri-project-name"
            maxLength="40"
          ></input>
          <textarea
            maxLength="600"
            type="text"
            name="basicDescriProjectDescription"
            placeholder="Enter your project name here"
            className="basicDescri-project-description"
          >
            Please describe your project purpose and who you want to collaborate
            with. The content should be no more than 600 words. For example, my
            project's purpose is to create a platform for collaboration between
            individuals and organizations. I am looking for partners who are
            passionate about making a positive impact in their communities and
            who are willing to share their knowledge and resources. I am excited
            to collaborate with like-minded individuals and organizations to
            make a positive impact in our communities. Together, we can create
            something that will benefit us all.
          </textarea>
        </div>
        <div className="addpr-card-left">
          <Dropdown
            placeholder="Your Location"
            options={options}
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
                placeholder="YOUR LOCATION"
                className="basicDescri-team-intro"
              >
                We would like to have a better understanding of your team.
                Please provide us with a brief description of your team,
                including their skills, experience, and any other relevant
                information.
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BasicDescription;
