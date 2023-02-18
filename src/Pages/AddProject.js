import React, { useState } from "react";
import BasicDescription from "../components/ProjectPost/BasicDescription";
import BudgetSetting from "../components/ProjectPost/BudgetSetting";
import { SkillNeeded } from "../components/ProjectPost/SkillNeeded";
import CategoryChoice from "../components/ProjectPost/CategoryChoice";
import ButtonAdd from "../components/button-add";
const AddProject = () => {
  return (
    <>
      <BasicDescription />
      <BudgetSetting/>
      <SkillNeeded />
      <CategoryChoice/>
      <ButtonAdd text="Submit" id="addpr-submit-btn" />
    </>
  );
};

export default AddProject;
