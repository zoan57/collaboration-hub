import React from "react";
import { Link, useNavigate } from "react-router-dom";
const LandingID = () => {
  return (
    <div className="dec-txt">
      <div className="id-container">
        <h4 className="id-top-txt">...with who?</h4>
        <div className="landing-identity">
          <Link to="/register">
            <img src="/images/landing-developer.svg"></img>
          </Link>
          <Link to="/register">
            <img src="/images/landing-UI.svg"></img>
          </Link>
        </div>
      </div>
      <div className="id-txt">
        <h3>“Unlock your potential, ignite your creativity.”</h3>
      </div>
    </div>
  );
};

export default LandingID;
