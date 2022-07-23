import React from "react";

function Radio() {
  const submitFn = () => {
    let name = document.getElementsByName("radio-button");
    // console.log(name);
    let name1;
    for (let i = 0; i < name.length; i++) {
      if (name[i].checked) {
        name1 = name[i].value;
      }
    }
    console.log(name1);
  };
  return (
    <div>
      <input type="radio" name="radio-button" id="r-html" value="HTML" />
      <label>HTML</label>
      <input type="radio" name="radio-button" id="r-css" value="CSS" />
      <label>CSS</label>
      <input type="radio" name="radio-button" id="r-js" value="JS" />
      <label>JS</label>
      <button onClick={submitFn}>Submit</button>
    </div>
  );
}

export default Radio;
