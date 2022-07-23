import React from "react";
import "./CenterDiv.css";

function CenterDiv() {
  return (
    <div className="container">
      <div className="header-class">
        <div className="left">
          <h2>Left</h2>
          <h2>Left</h2>
          <h2>Left</h2>
          <h2>Left</h2>
          <h2>Left</h2>
        </div>
        <div className="right">
          <h2>Right</h2>
          <h2>Right</h2>
          <h2>Right</h2>
          <h2>Right</h2>
          <h2>Right</h2>
        </div>
      </div>
      <div className="bottom-class"></div>
    </div>
  );
}

export default CenterDiv;
