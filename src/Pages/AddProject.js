import React, { useState } from "react";
import ButtonAdd from "../components/button-add";

const AddProject=()=>{
    const [projectName,setProjectName]=useState("");
    const [projectDescription,setProjectDescription]=useState("");

    return(
        <section className="addproject">
            <div className="addpr-welcome">
                <div className="addpr-welcome-txt">
                    <img src="/images/logo-sm.png" className="logo-sm"></img>
                    <span>Wirte something about your project.</span>
                </div>
            </div>
            <ButtonAdd text="Submit" id="addpr-submit-btn"/>
            <form className="addpr-form scrollable">
                <div className="addpr-card">
                    <h4 contentEditable="true" onInput={(e)=>{setProjectName(e.currentTarget.textContent)}} data-maxlength="3">Enter your project name here</h4>
                    <p contentEditable="true" onInput={(e)=>{setProjectDescription(e.currentTarget.textContent)}}>
                        <b>Please describe your project purpose and who you want to collaborate with. The content should be no more than 600 words.</b>
                        <br></br>
                        <i>For example, my project's purpose is to create a platform for collaboration between individuals and organizations. I am looking for partners who are passionate about making a positive impact in their communities and who are willing to share their knowledge and resources.<br></br>
                        I am excited to collaborate with like-minded individuals and organizations to make a positive impact in our communities. Together, we can create something that will benefit us all.</i>
                    </p>
                </div>
                <div>
                    <div className="addpr-skill">
                        <h4>Your Skill</h4>
                        <br></br>
                        <div>
                            <span>
                                I'll implement React multi selection chips by react-select API.
                            </span>
                        </div>
                    </div>
                    <div className="addpr-skill">
                        <h4>Your Skill</h4>
                        <br></br>
                        <div>
                            <span>
                                I'll implement React multi selection chips by react-select API.
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default AddProject;