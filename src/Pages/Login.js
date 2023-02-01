import React from "react";
import InputBarLong from "../components/InputBar-long";
import ButtonLong from "../components/button-long";

const Login=()=>{
    return(
        <section className="login dec-txt">
            <form className="form dec-txt">
                <div className="input-label">
                    <span>Email</span><br></br>
                    <InputBarLong/>
                </div>
                <div className="input-label">
                    <span>Password</span><br></br>
                    <InputBarLong/>
                </div>
                <br></br>
                <ButtonLong id="btn-sp-color" text="Log in"/>
                <br></br>
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
                <ButtonLong text="Sign up"/>

            </form>
        </section>
    );

};

export default Login;