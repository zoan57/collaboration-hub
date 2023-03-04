import React, { useEffect, useState } from "react";
import InputBarLong from "../components/ui/InputBar-long";
import ButtonLong from "../components/ui/button-long";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link,useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "../firebase";


const Register=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [registerColor, setRegisterColor]=useState("");
    
    const navigate=useNavigate();
    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/projects");
      }, [user, loading]);
    const register = (e) => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);};

    return(
        <section className="register dec-txt" id="register">
            <form className="form dec-txt">
                <div className="register-last-note">One more thing...</div>
                <div className="input-label">
                    <span>Username</span><br></br>
                    <InputBarLong type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="input-label">
                    <span>Email</span><br></br>
                    <InputBarLong type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-label">
                    <span>Password</span>
                    <br></br>
                    <span className="mark-txt">*Enter at least 8 characters</span>
                    <br></br>
                    <InputBarLong type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <br></br>
                <div className="register-check-to-receive">
                    <input type="checkbox"></input>
                    <span className="mark-txt">I’d like to receive email relating to new matches and ipdates about new features</span>
                </div>
                <br></br>
                <br></br>
                <span className="mark-txt">By signing up you agree to our Privacy Policy and Terms & Conditions for Candidates.</span>
                <br></br>
                <ButtonLong text="Sign up" id="btn-sp-color" onClick={register}/>
            </form>
        </section>
    );
};

export default Register;