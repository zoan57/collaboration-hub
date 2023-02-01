import React from "react";

function InputBarLong(props){
    const placeholder=props.placeholder;
    const className=props.className;
    return(
        <input placeholder={placeholder} className="inputbar-long dec-txt">
        </input>
    )
}

export default InputBarLong;