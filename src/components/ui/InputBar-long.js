import React from "react";

function InputBarLong(props) {
  const placeholder = props.placeholder;
  const className = props.className;
  const type = props.type;
  const name=props.name;
  const onChange = props.onChange;
  const value = props.value;
  const id = props.id;
  const maxLength=props.maxLength
  const required=props.required
  return (
    <input
      placeholder={placeholder}
      className={`inputbar-long dec-txt ${className}`}
      id={id}
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      maxLength={maxLength}
      
    ></input>
  );
}

export default InputBarLong;
