import React, { useEffect } from "react";

function CounterFunction({ number }) {
  useEffect(() => {
    // console.log("Component us mounted"); //array with empty dependency runs for first time
    // console.log("Component is updated"); //If the state is placed in the dependency array then it runs when the component is updated
    // return () => {
    //   console.log("this is unmounted");
    // }; //for implementing component will unmount we have to write like this
  }, [number]);
  return <div>{number} times</div>;
}

export default CounterFunction;
