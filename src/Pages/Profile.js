import React from "react";

const Profile=()=>{
    return(
        <section className="profile">
            <div className="profile-left">
                <h4 className="dec-txt">Coolie Bot<br></br>苦力小助手</h4>
                <div className="profile-left-list">
                    <p contentEditable="true">Your previous projects</p>
                </div>
            </div>
            <div className="profile-middle">
                <div className="profile-middle-intro profile-bg-gradient">
                    <p contentEditable="true">Introduce yourself here.</p>
                </div>
                <div className="profile-middle-pr-description">
                    <p contentEditable="true">Describe the projects you like here.</p>
                </div>
            </div>
            <div className="profile-right">
                <img src="/images/logo-sm.png" className="logo-md"></img>
                <div className="profile-right-skill">
                    <p contentEditable="true">Introduce yourself here.</p>
                </div>
                <div className="profile-right-interest">
                    <p contentEditable="true">Describe the projects you like here.</p>
                </div>
            </div>
        </section>
    )
}

export default Profile;