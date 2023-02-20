import React from "react";
import AddProjectForm from "../components/ProjectPost/AddProjectForm";
import { PostFormProvider } from "../context/PostFormContext";

const AddProject = () => {
  return (
    <>
      <PostFormProvider>
        <AddProjectForm />
      </PostFormProvider>
    </>
  );
};

export default AddProject;
