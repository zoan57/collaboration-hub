import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ButtonAdd from "../components/button-add";

const Project=()=>{
    return(
        <div>
            <section className="project">
                <aside className="project-sidebar">
                </aside>
                <section className="project-main">
                    <div className="project-main-to-add">
                        <span>Hey, let's get that new project added!</span>
                        <Link to="/add-new-project"><ButtonAdd text="Add Project" id="btn-project-add"></ButtonAdd></Link>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Project;