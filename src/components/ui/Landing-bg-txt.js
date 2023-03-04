import React from "react";
import { Link } from "react-router-dom";
const LandingBgTxt=()=>{
    return(
        <div className="landing-bg-txt">
            <span className="landing-bg-txt-1">COLLABORATE</span>
            <span className="landing-bg-txt-2">CREATIVE</span>
            <div className="logo-container">
                <Link to="/AI"><img src="/images/logo-sm.svg" className="logo logo-shift"></img></Link>
            </div>
        </div>
    );
}

export default LandingBgTxt;