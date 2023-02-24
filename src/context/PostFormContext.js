import React, { createContext, useState, useEffect } from "react";

const PostFormContext = createContext({});

export const PostFormProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    basicDescriProjectName: "",
    basicDescriProjectDescription: "",
    basicDescriTeamIntro: "",
    basicDescriLocation: [],
    skillNeededSkills: [],
    budgetSettingCheck: false,
    budgetSettingBudgetInput: "",
    categoryChoices: [],
  });
  const title = {
    0: "Basic Description",
    1: "Budget Setting",
    2: "Skill Needed",
    3: "Category Choices",
  };
  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data);
  };

  const {
    budgetSettingCheck,
    budgetSettingBudgetInput,
    ...requiredInputs
  } = data;
  const canSubmit =
    [...Object.values(requiredInputs)].every(Boolean) &&
    page === Object.keys(title).length - 1;

  const disablePrev = page === 0;

  const canNextPage1 = Object.keys(data)
    .filter((key) => key.startsWith("basic"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage3 = Object.keys(data)
    .filter((key) => key.startsWith("skill"))
    .map((key) => data[key])
    .every(Boolean);

  const disableNext =
    page === Object.keys(title).length - 1 ||
    (page === 0 && !canNextPage1) ||
    (page === 2 && !canNextPage3);

  const prevHide = page === 0 && "hide";

  const nextHide = page === Object.keys(title).length - 1 && "hide";

  const submitHide = page !== Object.keys(title).length - 1 && "hide";

  return (
    <PostFormContext.Provider
      value={{
        page,
        title,
        setPage,
        data,
        setData,
        handleChange,
        disableNext,
        disablePrev,
        canSubmit,
        prevHide,
        nextHide,
        submitHide,
      }}
    >
      {children}
    </PostFormContext.Provider>
  );
};

export default PostFormContext;
