import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="nav-container1">
      <div className="nav-cont-left">
        <p>Left1</p>
        <p>Left2</p>
      </div>
      <div className="nav-cont-middle">
        <p>Middle</p>
        <p>Middle</p>
        <p>Middle</p>
        <p>Middle</p>
      </div>
      <div className="nav-cont-right">
        <p>Right</p>
        <p>Right</p>
        <p>Right</p>
        <p>Right</p>
      </div>
    </div>
  );
}

export default Nav;
