import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ButtonAdd from "../components/button-add";

const Project=()=>{
    return(
        <div>
            <section className="project">
                <aside className="project-sidebar scrollable">
                </aside>
                <section className="project-main">
                    <div className="project-main-to-add">
                        <span>Hey, let's get that new project added!</span>
                        <Link to="/add-new-project"><ButtonAdd text="Add Project" id="btn-project-add"></ButtonAdd></Link>
                    </div>
                    <div className="project-main-list scrollable">
                        <div>
                            <div className="pr-lists pr-recmd">
                                <h4>All Your Matches</h4>
                            </div>
                            <div className="pr-lists pr-recmd">
                                <h4>Projects Added this Week</h4>
                            </div>
                            <div className="pr-lists pr-recmd ">
                                <h4>Something Interesting</h4>
                            </div>
                        </div>
                        <div className="pr-lists"></div>
                        <div className="pr-lists"></div>
                        <div className="pr-lists"></div>
                        <div className="pr-lists"></div>
                        <div className="pr-lists"></div>
                        <div className="pr-lists"></div>
                        <div className="pr-lists"></div>
                        <div className="pr-lists"></div>
                        <div className="pr-lists"></div>
                        <div className="pr-lists"></div>
                        <div className="pr-lists"></div>
                        <div className="pr-lists"></div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Project;