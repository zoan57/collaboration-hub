import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const Navbar=()=>{
    // Set Authentication function for Login or not
    const [isLoggedIn, setIsLoggedIn]=useState(true);
    const [user, loading, error] = useAuthState(auth);
    const [isToggle,setIsToggle]=useState(true);
    const toggle= (e)=>{
        const dropdown=document.getElementById("menu-dropdown");
        dropdown.classList.toggle("hide");
        window.addEventListener("click", handleOutsideClick);
    }
    const handleOutsideClick = (e) => {
        const dropdown=document.getElementById("menu-dropdown");
        const navMenu=document.getElementById("nav-menu");
        if (!navMenu.contains(e.target)) {
          dropdown.classList.toggle("hide");
          window.removeEventListener("click", handleOutsideClick);
        }
      };
    useEffect(()=>{
        if(user){
            setIsLoggedIn(false);
        }else{
            setIsLoggedIn(true);
        };
    },[user])
    return(
        <header className="header">
            <div>
                {isLoggedIn ? (
                    <div className="header-left">
                        <Link to="/"><img src="/images/logo-Collaboration Hub.png" className="nav-logo"></img></Link>
                        <Link to="/"><img src="/images/logo-sm.png" className="nav-logo-sm"></img></Link>
                    </div>

                ): (
                    <div>
                        <Link to="/register"><img src="/images/logo-Collaboration Hub.png" className="nav-logo"></img></Link>
                        <Link to="/register"><img src="/images/logo-sm.png" className="nav-logo-sm"></img></Link>
                    </div>
                )}
            </div>
            <div className="search">
                <img src="/images/search.png"></img>
                <input className="search-bar dec-txt"></input>
            </div>
            <div className="header-right">
                {isLoggedIn ?(
                    <nav>
                        <Link to="/login"><button className="btn btn-login">Login</button></Link>
                    </nav>
                ):(
                    <div className="nav-login">
                        <Link to="/ai">
                            <div className="nav-btn nav-display">
                                <img src="/images/logo-sm.svg" className="nav-logo-btn"></img>
                                <span>Chat with AI</span>
                            </div>
                        </Link>
                        <Link to="/profile">
                            <div className="nav-btn nav-display">
                                <img src="/images/logo-sm.png" className="nav-logo-btn"></img>
                                <span>Profile</span>
                            </div>
                        </Link>
                        <Link to="/project">
                            <button className="btn btn-project">Project</button>
                        </Link>
                        
                    </div>
                )}
                <div>
                    <div class="menu" onClick={toggle} id="nav-menu">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                    <div class="menu-dropdown hide" id="menu-dropdown">
                        <ul>
                            <Link to="profile"><li>Profile</li></Link>
                            <Link to="AI"><li>Chat with AI</li></Link>
                            <Link to="add-new-project"><li>Add New Project</li></Link>
                            <Link to="project"><li>Project</li></Link>
                            <Link to="Message"><li>Message</li></Link>

                        </ul>
                    </div>
                </div>
                
            </div>
        </header>
    );
};

export default Navbar;