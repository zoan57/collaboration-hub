import "../css/style.css";
import Navbar from "../components/Navbar";
import LandingBgTxt from "../components/Landing-bg-txt";
import LandingID from "../components/Landing-id";
import React from "react";

function Landing(){

    return (
        <div>
            <main className="landing-main" id="scrollColor">
                <LandingID/>
            </main>
            <LandingBgTxt/>
        </div>
    )
}


export default Landing;

