import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <header className="header">
            <div>
                <Link to="/"><img src="/images/logo-Collaboration Hub.png" className="nav-logo"></img></Link>
            </div>
            <div className="search">
                <img src="/images/search.png"></img>
                <input className="search-bar dec-txt"></input>
            </div>
            <div className="header-right">
                <Link to="/login"><button className="btn btn-login">Login</button></Link>
                <div class="menu" onclick="">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;