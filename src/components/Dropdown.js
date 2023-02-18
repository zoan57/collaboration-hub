import React, { useEffect, useState } from "react";

const DropdownIcon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};
const CloseIcon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
    </svg>
  );
};

const Dropdown = (props) => {
  const placeholder = props.placeholder;
  const options = props.options;
  const isMulti = props.isMulti;
  const classNameOfListOption = props.classNameOfListOption;
  const classNameOfList = props.classNameOfList;
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null);
  const toDisplay = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return placeholder;
    }
    if (isMulti) {
      return (
        <div className="dropdown-tags">
          {selectedValue.map((option) => (
            <div key={option.value} className="dropdown-tag-item">
              {option.label}
              <span
                onClick={(e) => onTagRemove(e, option)}
                className="dropdown-tag-close"
              >
                <CloseIcon />
              </span>
            </div>
          ))}
        </div>
      );
    }
    return selectedValue.label;
  };
  const removeOption = (option) => {
    return selectedValue.filter((o) => o.value !== option.value);
  };
  const onTagRemove = (e, option) => {
    e.stopPropagation();
    setSelectedValue(removeOption(option));
  };
  const onItemClick = (option) => {
    let newValue;
    if (isMulti) {
      if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = option;
    }
    setSelectedValue(newValue);
  };

  useEffect(() => {
    const handler = () => {
      setShowMenu(false);
    };
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  const handleShowMenuChange = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };
  return (
    <div className="basicDescri-location">
      <div
        className="location-input"
        id="location-input"
        onClick={handleShowMenuChange}
      >
        <div>{toDisplay()}</div>
        <div className="dropdown-icon">
          <DropdownIcon />
        </div>
      </div>
      {showMenu && (
        <div className={classNameOfList}>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onItemClick(option);
              }}
              className={classNameOfListOption}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
