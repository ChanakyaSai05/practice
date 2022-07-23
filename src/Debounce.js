import React from "react";
function Debounce() {
  const debounceFun = (cb, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };
  const handleChange = debounceFun((e) => {
    console.log(e.target.value);
  }, 1000);
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
export default Debounce;
