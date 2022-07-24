import React from "react";

function CheckBox() {
  const submitFun = () => {
    let name = document.getElementsByName("check");
    // console.log(name);
    let result = "";
    for (let i = 0; i < name.length; i++) {
      if (name[i].checked) {
        result += name[i].value;
        result += " ";
      }
    }
    console.log("result");
    //comment added
  };
  return (
    <div>
      <input type="checkbox" name="check" value="HTML" />
      HTML
      <input type="checkbox" name="check" value="CSS" />
      CSS
      <input type="checkbox" name="check" value="JS" />
      JS
      <br />
      <button onClick={submitFun}>Submit Button</button>
    </div>
  );
}

export default CheckBox;
