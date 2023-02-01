import React from "react";

const Navbar=()=>{
    return(
        <header className="header">
            <div>
                <img src="/images/logo-Collaboration Hub.png" className="nav-logo"></img>
            </div>
            <div className="search">
                <img src="/images/search.png"></img>
                <input className="search-bar dec-txt"></input>
            </div>
            <div className="header-right">
                <button className="btn btn-login">Login</button>
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