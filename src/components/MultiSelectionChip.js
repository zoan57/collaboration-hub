import React from "react";

const MultiSelectionChip = (props) => {
  const options = props.options;
  const classNameOfList = props.classNameOfList;
  return (
    <div className="multi-selection-chips">
      {options.map((option) => (
        <div className={classNameOfList} key={option.value}>
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default MultiSelectionChip;
