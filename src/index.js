import "./style.css";
import List from "./list.js";
import React from "react";
import ReactDOM from "react-dom";
function app(){
    return <div>
        <div className="index-header"><h1>React 練習專案</h1></div>
        <div className="main">歡迎光臨我的頁面</div><br></br>
        <a href="/list.html" className="button">點此開始</a>
        <br></br>
        <br></br>
        
    </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app());
