import React from "react";
import { PostFormProvider } from "./context/PostFormContext";
import { ProjectEditForm } from "./components/ProjectEditForm";

const ProjectEdit = () => {
  return (
    <>
      <PostFormProvider>
        <ProjectEditForm />
      </PostFormProvider>
    </>
  );
};

export default ProjectEdit;
