import React from "react";

function InputBarLong(props){
    const placeholder=props.placeholder;
    const className=props.className;
    const type=props.type;
    const onChange=props.onChange;
    const value=props.value;
    const id=props.id;
    return(
        <input placeholder={placeholder} className="inputbar-long dec-txt" type={type} onChange={onChange} value={value} id={id}>
        </input>
    )
}


export default InputBarLong;