import React from "react";

function ButtonLong(props){
    const id=props.id;
    const text=props.text;
    const onClick=props.onClick;
    const href=props.href;
    return(
        <div id={id} className="btn-long dec-txt" onClick={onClick}>
            <span>{text}</span>
        </div>
    )
}

export default ButtonLong;