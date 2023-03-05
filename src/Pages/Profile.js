import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Link, useNavigate, useParams } from "react-router-dom";
import Edit from "../components/Edit";
import { db } from "../firebase";
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  collection,
  where,
  query,
  orderBy,
  limit,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";
import { LinkIcon } from "../components/ui/Icons";
import { InstagramIcon } from "../components/ui/Icons";
import { FacebookIcon } from "../components/ui/Icons";
import { ToolIcon } from "../components/ui/Icons";
import { CategoryIcon } from "../components/ui/Icons";
import { ChatTextIcon } from "../components/ui/Icons";
import { TruncateText } from "../components/TruncateText";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState("");
  const [projectData, setProjectData] = useState(null);
  const [userInfo, setUserInfo] = useState([]);
  const [editing, setEditing] = useState(false);
  const [subscribeAnimating, setSubscribeAnimating] = useState(false);
  const navigate = useNavigate();
  const profileUser = useParams().uid;
  const projectsRef = collection(db, "Projects");
  const projectQuery = query(
    projectsRef,
    where("uid", "==", profileUser),
    orderBy("lastFetchedTimeCount", "desc"),
    limit(5)
  );

  //To subscribe someone
  const handleSubscribeClick = async () => {
    if (!user) {
      alert("Please login to subscribe.");
    } else {
      if (!subscribeAnimating && profileUser && profileUser !== currentUser) {
        await updateDoc(doc(db, "Users", currentUser), {
          myFavoriteUsers: arrayUnion(profileUser),
        });
        setSubscribeAnimating(true);
        console.log("subscribe");
      } else if (
        subscribeAnimating &&
        profileUser &&
        profileUser !== currentUser
      ) {
        await updateDoc(doc(db, "Users", currentUser), {
          myFavoriteUsers: arrayRemove(profileUser),
        });
        setSubscribeAnimating(false);
        console.log("unsubscribe");
      }
    }
  };

  //To set a message
  const handleChatBoxClick = async (e) => {
    e.preventDefault();
    if (currentUser) {
      const currentUsername = user.displayName;

      const profileUsername = userInfo.name || "unknown";
      const chatID = [profileUser, currentUser].sort().join("-");

      const docRef = doc(db, "ChatBox", chatID);

      const docSnap = await getDoc(docRef);
      const userRef = doc(db, "Users", currentUser);
      const profileUserRef = doc(db, "Users", profileUser);
      if (!docSnap.exists()) {
        const docPayload = {
          users: [profileUser, currentUser],
          usernames: [profileUsername, currentUsername],
          lastAt: Date.now(),
          lastMessage: "No new message yet.",
        };
        const messageRef = doc(db, "Message", chatID);
        await setDoc(messageRef, { messages: [] });
        await setDoc(docRef, docPayload);
        if (userRef && profileUserRef) {
          await updateDoc(userRef, { chatBox: arrayUnion(chatID) });
          await updateDoc(profileUserRef, { chatBox: arrayUnion(chatID) });
        }
        navigate("/message");
      } else {
        navigate("/message");
      }
    }
    if (!user) {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (currentUser) {
      let unsub = onSnapshot(doc(db, "Users", currentUser), (doc) => {
        if (doc.data()) {
          const favorites = doc.data().myFavoriteUsers;
          const containsUserID = favorites.includes(profileUser);
          if (containsUserID) {
            setSubscribeAnimating(true);
          }
        }
      });
      return () => {
        unsub();
      };
    }
  }, [subscribeAnimating, currentUser]);

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
    if (data.length > 0) {
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
          setUserInfo={setUserInfo}
        />
      ) : (
        <section className="profile">
          <section className="profile-left profile-info">
            <div className="profile-avatar">
              <img src="/images/logo-sm.png" className="logo-md"></img>
              <h4 className="dec-txt">
                {userInfo.name ? userInfo.name : "Unknown"}
              </h4>
              {currentUser === profileUser && (
                <button className="edit" onClick={() => setEditing(!editing)}>
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
              <Link to={`${userInfo.otherLink}`} target="_blank">
                <LinkIcon width="40px" height="40px" />
              </Link>
            </div>
            <div className="profile-dis-flexbox profile-msg">
              <div onClick={handleChatBoxClick} className="profile-dis-flexbox profile-msg-svg">
                <ChatTextIcon width="30px" height="30px" />
              </div>
              <span>Message</span>
            </div>
            {profileUser !== currentUser ? (
              <div className="profile-dis-flexbox">
                <div
                  onClick={handleSubscribeClick}
                  className={`HeartAnimation profile-heart ${
                    subscribeAnimating ? "heart-animate" : ""
                  }`}
                ></div>
                <span className="profile-heart-txt">{`${
                  subscribeAnimating ? "Subscribed" : "Subscribe"
                }`}</span>
              </div>
            ) : null}
          </section>
          <div className="profile-middle">
            <div className="profile-middle-intro profile-bg-gradient">
              {userInfo.introduction ? (
                <p>{userInfo.introduction.replace(/\n/g, "<br>")}</p>
              ) : (
                <p>"There is currently no introduction."</p>
              )}
            </div>
            <div className="divide"></div>
            <div className="profile-right-interest profile-bg-gradient">
              {userInfo.projectInterests ? (
                <p
                  dangerouslySetInnerHTML={{
                    __html: userInfo.projectInterests.replace(/\n/g, "<br>"),
                  }}
                ></p>
              ) : (
                <p>"No project preference was added. "</p>
              )}
            </div>
          </div>
          <section className="profile-left">
            <h4>Side projects</h4>
            {projectData !== null ? (
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
              <h5>No projects yet</h5>
            )}
          </section>
        </section>
      )}
    </>
  );
};

export default Profile;
