import React from "react";

function ButtonLong(props){
    const id=props.id;
    const text=props.text;
    return(
        <button id={id} className="btn-long dec-txt">
            <span>{text}</span>
        </button>
    )
}

export default ButtonLong;