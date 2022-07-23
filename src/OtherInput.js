import React from "react";

function OtherInput() {
  return (
    <div>
      <input type="password" onChange={(e) => console.log(e.target.value)} />
    </div>
  );
}

export default OtherInput;
