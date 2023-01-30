import "./style.css";
import React from "react";
import ReactDOM from "react-dom";

function List(){
    return <div>
        <div className="record-input">
            <input placeholder="測試紀錄" className="input"></input>
        <button className="button">新增紀錄</button>
        </div>
        <hr></hr>
        <br></br>
        <a href="/" className="button">返回首頁</a>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(List());