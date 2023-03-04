import React, { useState } from "react";
import usePostFormContext from "../hook/usePostFormContext";
import { HeartIcon } from "./ui/Icons";

const MultiSelectionChip = (props) => {
  const { data, setData } = usePostFormContext();

  const options = props.options;
  const dataValueName = props.dataValueName;
  const classNameOfList = props.classNameOfList;
  const classNameOfSelectedIcon = props.classNameOfSelectedIcon;
  const [optionValue, setOptionValue] = useState([]);

  // For Category Item Click
  const onCategoryItemClick = (option) => {
    const optionIndex = optionValue.findIndex(
      (selectedOption) => selectedOption === option
    );
    if (optionIndex === -1) {
      // If option is not already selected, add it to the array of selected options
      setOptionValue([...optionValue, option]);
      setData((prevData) => ({
        ...prevData,
        categoryChoices: [...optionValue, option],
      }));
    } else {
      // If option is already selected, remove it from the array of selected options
      const updatedOptions = [...optionValue];
      updatedOptions.splice(optionIndex, 1);
      setOptionValue(updatedOptions);
      setData((prevData) => ({
        ...prevData,
        categoryChoices: updatedOptions,
      }));
    }
  };
  return (
    <div className="multi-selection-chips">
      {options.map((option) => (
        <div
          className={classNameOfList}
          key={option.value}
          onClick={() => {
            if (dataValueName === "categoryChoices") {
              onCategoryItemClick(option.label);
            }
          }}
          style={{
            backgroundColor: optionValue.includes(option.label)
              ? "#e2ff5e"
              : "white",
          }}
        >
          {optionValue.includes(option.label) && (
            <HeartIcon className={classNameOfSelectedIcon} />
          )}
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default MultiSelectionChip;
