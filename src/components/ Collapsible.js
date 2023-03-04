import React, { useState } from "react";

function Collapsible(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const contentNotCollapse = props.contentNotCollapse;
  const contentCollapsed=props.contentCollapsed

  function toggleCollapse() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div onClick={toggleCollapse}>
      <div>{contentNotCollapse}</div>
      {!isCollapsed && <div>{contentCollapsed}</div>}
    </div>
  );
}
export default Collapsible;
