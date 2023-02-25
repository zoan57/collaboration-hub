import React from "react";
import BasicDescription from "./BasicDescription";
import BudgetSetting from "./BudgetSetting";
import SkillNeeded from "./SkillNeeded";
import CategoryChoice from "./CategoryChoice";
import usePostFormContext from "../../hook/usePostFormContext";
import Contact from "./Contact";

const AddProjectFormInput = () => {
  const { page } = usePostFormContext();
  const display={
    0:<BasicDescription/>,
    1:<BudgetSetting/>,
    2:<SkillNeeded/>,
    3:<CategoryChoice/>,
    4:<Contact/>
  }
  return (display[page])
};

export default AddProjectFormInput;
