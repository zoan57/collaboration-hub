import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePostFormContext from "../../hook/usePostFormContext";
import AddProjectFormInput from "./AddProjectFormInput";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { addDoc, setDoc, updateDoc, doc } from "firebase/firestore";
const AddProjectForm = () => {
  const {
    data,
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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      console.log("Submitting form...");
      if (user.displayName !== null) {
        var projectUid = user.displayName +"-"+ Date.now();
      } else {
        var projectUid = user.uid +"-"+ Date.now();
      }
      const docRef = doc(db, "Projects", projectUid);
      await setDoc(docRef, data), { merge: true };
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
