import React,{useState, useEffect} from "react";
import InputBarLong from "../components/InputBar-long";
import ButtonLong from "../components/button-long";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";


const Login=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        };
        if (user) navigate("/project");
      }, [user, loading]);
    
    return(
        <section className="login dec-txt">
            <form className="form dec-txt">
                <div className="input-label">
                    <span>Email</span><br></br>
                    <InputBarLong type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-label">
                    <span>Password</span><br></br>
                    <InputBarLong type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <br></br>
                <ButtonLong id="btn-sp-color" text="Log in" onClick={()=>logInWithEmailAndPassword(email,password)}/>
                <br></br>
                <span>Forgot your password?</span>
                <br></br>
                <br></br>
                <div className="login-form-dividing">
                    <div></div>
                    <span>OR</span>
                    <div></div>
                </div>
                <br></br>
                <span>Don’t have an account yet?</span>
                <br></br>
                <Link to="/register"><ButtonLong text="Sign up"/></Link>
            </form>
        </section>
    );

};

export default Login;