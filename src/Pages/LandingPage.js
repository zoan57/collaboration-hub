import React from "react";
import { Link } from "react-router-dom";
import LandingBgTxt from "../components/ui/Landing-bg-txt";
import LandingID from "../components/ui/Landing-id";
import { ChatTextIcon } from "../components/ui/Icons";
import { ProjectsIcon } from "../components/ui/Icons";
import { AvatarIcon } from "../components/ui/Icons";
import { GoldMedalIcon } from "../components/ui/Icons";

const LandingPage = () => {
  return (
    <div className="landing-bg">
      <LandingBgTxt />
      <div className="landing-1st-bg">
        <LandingID />
        <img
          src="/images/landing-elements/gradient bubble-7.gif"
          className="landing-bubble-7"
        />
      </div>
      <div className="landing-2nd-bg">
        <div className="landing-2nd-main">
          <h4>
            Find <b>Your Perfect Collaborator </b>with Collaboration Hub
          </h4>
          <div className="landing-2nd-icon">
            <Link to="/ai">
              <div className="landing-intro-icon">
                <img
                  src="/images/chatGPT-logo-bw.png"
                  className="chatgpt-logo"
                />
                <span>ChatGPT</span>
              </div>
            </Link>
            <Link to="/projects">
              <div className="landing-intro-icon">
                <ProjectsIcon
                  width="50px"
                  height="50px"
                  className="landing-pr-icon"
                />
                Post
              </div>
            </Link>
            <div className="landing-intro-icon">
              <ChatTextIcon
                width="30px"
                height="30px"
                className="landing-pr-msg-icon"
              />
              Message
            </div>
            <div className="landing-intro-icon">
              <AvatarIcon
                width="45px"
                height="45px"
                className="landing-pr-icon"
              />
              Subscribe
            </div>
          </div>
          <div className="landing-2nd-txt">
            <p>
              <div className="landing-2nd-p-title">
                <GoldMedalIcon width="40px" height="40px" />
                <h5>
                  Our platform offers a range of features
                  <br /> to help you collaborate like a pro, including:
                </h5>
              </div>
              <br />
              <ul>
                <li>
                  Matchmaking based on your skills and project preferences
                </li>
                <li>Project posting and messaging to help you get started</li>
                <li> AI talking to inspire you with fresh ideas</li>
              </ul>
              <br />
              <b>
                Join Collaboration Hub today and take your collaboration to the
                next level!
              </b>
            </p>
          </div>
        </div>
        <img
          src="/images/landing-elements/gradient bubble-5.PNG"
          className="landing-bubble-5"
        />
      </div>
    </div>
  );
};

export default LandingPage;
