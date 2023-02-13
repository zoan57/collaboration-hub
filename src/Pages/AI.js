import React,{useState, useEffect} from "react";

const AI=()=>{    
    /*useEffect(()=>{
        const ai=document.getElementById("ai-img");
        const interval = setInterval((e) => {
            ai.classList.toggle("logo-ai-move");
            console.log("haha");
          }, 500);
        return () => {
        clearInterval(interval);
        };
    })*/
    return(
        <div className="ai">
            <img src="/images/logo-sm.png" className="logo-ai-move" id="ai-img"></img>
            <span>I'll be here soon...</span>
        </div>
    )
}

export default AI;