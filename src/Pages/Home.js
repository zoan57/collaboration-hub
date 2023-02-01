import "../style.css";
import Navbar from "../components/Navbar";
import LandingBgTxt from "../components/Landing-bg-txt";
import LandingID from "../components/Landing-id";
import React from "react";

function Home(){
    return (
        <div>
            <Navbar/>
            <LandingBgTxt/>
            <main className="landing-main">
                <LandingID/>
            </main>
        </div>
    )
}

export default Home;

