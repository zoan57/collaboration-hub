import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Link, useNavigate, useParams } from "react-router-dom";
import Edit from "../components/Edit";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { LinkIcon } from "../components/Icons";
import { InstagramIcon } from "../components/Icons";
import { FacebookIcon } from "../components/Icons";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const profileUser = useParams().uid;

  const getUserInfo = async () => {
    const userRef = doc(db, "Users", profileUser);
    const q = await getDoc(userRef);
    if (q.exists()) {
      const data = q.data();
      setUserInfo(data);
    } else {
      navigate("/project");
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [profileUser]);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    setCurrentUser(user.uid);
  }, [user, loading]);

  return (
    <>
      {editing ? (
        <Edit editing={editing} setEditing={setEditing} userInfo={userInfo} />
      ) : (
        <section className="profile">
          <div className="profile-middle">
            <div>
              <h4 className="dec-txt">{userInfo.name}</h4>
              {currentUser === profileUser && (
                <button className="edit" onClick={() => setEditing(true)}>
                  Edit
                </button>
              )}
            </div>
            <div>
              <Link
                to={`https://www.instagram.com/louisvuitton/`}
                target="_blank"
              >
                <FacebookIcon width="3rem" height="3rem" />
              </Link>
              <Link
                to={`https://www.instagram.com/louisvuitton/`}
                target="_blank"
              >
                <InstagramIcon width="3rem" height="3rem" />
              </Link>
              <Link
                to={`https://www.instagram.com/louisvuitton/`}
                target="_blank"
              >
                <LinkIcon width="3rem" height="3rem" />
              </Link>
            </div>
            <div className="profile-middle-intro profile-bg-gradient">
              <p>Introduce yourself here.</p>
            </div>
            <div className="profile-middle-pr-description">
              <p>Describe the projects you like here.</p>
            </div>
          </div>
          <div className="profile-left">
            <div className="profile-left-list">
              <p>Your previous projects</p>
            </div>
          </div>
          <div className="profile-right">
            <img src="/images/logo-sm.png" className="logo-md"></img>
            <div className="profile-right-skill">
              <p>Introduce yourself here.</p>
            </div>
            <div className="profile-right-interest">
              <p>Describe the projects you like here.</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
