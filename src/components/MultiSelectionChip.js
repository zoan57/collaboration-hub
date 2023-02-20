import React, { useState } from "react";
import usePostFormContext from "../hook/usePostFormContext";

const MultiSelectionChip = (props) => {
  const { data, setData } = usePostFormContext();

  const options = props.options;
  const dataValueName = props.dataValueName;
  const classNameOfList = props.classNameOfList;
  const classNameOfSelectedIcon = props.classNameOfSelectedIcon;
  const [optionValue, setOptionValue] = useState([]);
  const HeartIcon = () => {
    return (
      <svg
        name="hearIcon"
        viewBox="0 0 16 13"
        width="16"
        height="13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classNameOfSelectedIcon}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#000000"
          d="M6.94474 0.78748C6.18939 0.289888 5.28442 0 4.35417 0C1.91583 0 0 1.89907 0 4.31608C0 7.2 2.48474 8.99368 4.09284 10.203C4.1829 10.2707 4.2702 10.3364 4.35417 10.4C5.9375 11.6 7.91667 12.8 7.91667 12.8C7.91667 12.8 9.89583 11.6 11.4792 10.4C11.5632 10.3364 11.6504 10.2707 11.7405 10.203C13.3486 8.99368 15.8333 7.12512 15.8333 4.31608C15.8333 1.89907 13.9175 0 11.4792 0C10.549 0 9.64393 0.289888 8.8886 0.78748C8.52546 1.02672 8.19684 1.31398 7.91667 1.64011C7.6365 1.31398 7.30788 1.02672 6.94474 0.78748Z"
        ></path>
      </svg>
    );
  };

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
