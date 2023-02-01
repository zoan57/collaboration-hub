import "./style.css";
import Navbar from "./components/navbar";
import LandingBgTxt from "./components/landing-bg-txt";
import LandingID from "./components/landing-id";
import React from "react";
import ReactDOM from "react-dom";
function app(){
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app());
