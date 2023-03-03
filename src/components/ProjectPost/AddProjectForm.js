import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePostFormContext from "../../hook/usePostFormContext";
import AddProjectFormInput from "./AddProjectFormInput";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { addDoc, setDoc, updateDoc, doc } from "firebase/firestore";
const AddProjectForm = () => {
  const {
    data,
    setData,
    page,
    setPage,
    prevHide,
    nextHide,
    submitHide,
    canSubmit,
    disableNext,
    disablePrev,
  } = usePostFormContext();
  const [user, loading, error] = useAuthState(auth);
  const [submitTime, setSubmitTime] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      console.log("Submitting form...");
      const now = new Date();
      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const dd = String(now.getDate()).padStart(2, "0");
      const submitDate = `${yyyy}-${mm}-${dd}`;
      const submitTime = new Date().getTime();
      if (user.displayName !== null) {
        const username = user.displayName.toLowerCase().replace(/\s+/g, "-");
        var projectId = username + "-" + submitTime;
      } else {
        var projectId = user.uid + "-" + submitTime;
      }
      const submitData = {
        ...data,
        projectId: projectId,
        submitTime: submitDate,
        lastFetchedTimeCount: submitTime,
        username: user.displayName,
        uid: user.uid,
      };
      const docRef = doc(db, "Projects", projectId);
      await setDoc(docRef, submitData), { merge: true };
      console.log(`${user.displayName} Form submitted!`);
    }
    navigate("/login");
  };

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setPage((next) => next + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <AddProjectFormInput />
      <div className="addpr-btn-list">
        <button
          type="button"
          onClick={handlePrev}
          disabled={disablePrev}
          className={`addpr-btn ${prevHide}`}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={disableNext}
          className={` addpr-btn ${nextHide}`}
        >
          Next
        </button>
        <button
          type="submit"
          className={` addpr-btn ${submitHide}`}
          disabled={!canSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddProjectForm;
