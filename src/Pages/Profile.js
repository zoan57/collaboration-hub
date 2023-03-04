import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Link, useNavigate, useParams } from "react-router-dom";
import Edit from "../components/Edit";
import { db } from "../firebase";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  where,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { LinkIcon } from "../components/ui/Icons";
import { InstagramIcon } from "../components/ui/Icons";
import { FacebookIcon } from "../components/ui/Icons";
import { ToolIcon } from "../components/ui/Icons";
import { CategoryIcon } from "../components/ui/Icons";
import { TruncateText } from "../components/TruncateText";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState("");
  const [projectData, setProjectData] = useState(null);
  const [userInfo, setUserInfo] = useState([]);
  const [editing, setEditing] = useState(false); //temporary
  const navigate = useNavigate();
  const profileUser = useParams().uid;
  const projectsRef = collection(db, "Projects");
  const projectQuery = query(
    projectsRef,
    where("uid", "==", profileUser),
    orderBy("lastFetchedTimeCount", "desc"),
    limit(5)
  );

  // Get current user's previous projects
  const getProjects = async () => {
    const data = [];
    if (profileUser) {
      const projects = await getDocs(projectQuery);
      if (projects) {
        projects.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
      }
    }
    if (data !== null) {
      setProjectData(data);
    }
  };
  useEffect(() => {
    getProjects();
  }, [profileUser]);

  const getUserInfo = async () => {
    const userRef = doc(db, "Users", profileUser);
    const q = await getDoc(userRef);
    if (q.exists()) {
      const data = q.data();
      setUserInfo(data);
    } else {
      navigate("/projects");
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
    if (user) {
      setCurrentUser(user.uid);
    }
  }, [user, loading]);

  return (
    <>
      {editing ? (
        <Edit
          editing={editing}
          projectData={projectData}
          setEditing={setEditing}
          setProjectData={setProjectData}
          userInfo={userInfo}
        />
      ) : (
        <section className="profile">
          <section className="profile-middle">
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
                to={`https://www.facebook.com${userInfo.facebook}`}
                target="_blank"
              >
                <FacebookIcon width="40px" height="40px" />
              </Link>
              <Link
                to={`https://www.instagram.com${userInfo.instagram}`}
                target="_blank"
              >
                <InstagramIcon width="40px" height="40px" />
              </Link>
              <Link to={`/${userInfo.otherLink}`} target="_blank">
                <LinkIcon width="40px" height="40px" />
              </Link>
            </div>
            <div className="profile-middle-intro profile-bg-gradient">
              <p>{`${userInfo.introduction}` || "Introduce yourself here."}</p>
            </div>
            <div className="profile-middle-pr-description">
              <p>Describe the projects you like here.</p>
            </div>
          </section>
          <section className="profile-project-list">
            <h4>Side projects</h4>
            {projectData ? (
              projectData.map((doc) => (
                <div className="profile-project">
                  <div>
                    <h5>{doc.basicDescriProjectName || "Unknown"}</h5>
                    <br />
                    <span>{doc.submitTime || "No date"}</span>
                    <br />
                    {doc.skillNeededSkills && (
                      <ToolIcon width="10px" height="10px" />
                    )}
                    <ul>
                      {doc.skillNeededSkills.map((skill) => {
                        return <li className="skill">{skill}</li>;
                      })}
                    </ul>
                    <br />
                    <CategoryIcon width="10px" height="10px" />
                    <ul>
                      {doc.categoryChoices.map((cat) => {
                        return <li className="category">{cat}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <div>No project</div>
            )}
          </section>
          <div className="profile-right">
            <img src="/images/logo-sm.png" className="logo-md"></img>
            <div className="profile-right-skill">
              <p>Introduce yourself here.</p>
            </div>
            <div className="profile-right-interest">
              <p>
                {`${userInfo.projectInterests}` || "Introduce yourself here."}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Profile;
