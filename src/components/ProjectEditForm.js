import React, { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePostFormContext from "../hook/usePostFormContext";
import { ProjectEditFormInput } from "./ProjectEditFormInput";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export const ProjectEditForm = () => {
  const projectId = useParams().projectId;
  const [user, loading, error] = useAuthState(auth);
  const { data, setData, handleChange } = usePostFormContext();
  const [currentUserId, setCurrentUserId] = useState("");
  const navigate=useNavigate()

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user.uid) {
      setCurrentUserId(user.uid);
    }
  }, [user, loading]);
  

  const handleOnUpdateProject = async (e) => {
    e.preventDefault();
    const projectRef = doc(db, "Projects", projectId);
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const submitDate = `${yyyy}-${mm}-${dd}`;
    const submitTime = new Date().getTime();

    if (projectId && projectRef) {
      const submitData = {
        ...data,
        projectId: projectId,
        submitTime: submitDate,
        lastFetchedTimeCount: submitTime,
        uid: currentUserId,
      };
      await updateDoc(projectRef, submitData);
    }
    console.log(`Form submitted!`);
    console.log(data);
    console.log("Submitting form...");
    navigate("/projects");
  };
  return (
    <form onSubmit={handleOnUpdateProject}>
      <ProjectEditFormInput />
      <button type="submit" className="btn">
        Save
      </button>
    </form>
  );
};
