import React, { useEffect, useState } from "react";
import CounterFunction from "./CounterFunction";
function LifeCycleFunction() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <CounterFunction number={count} />
    </div>
  );
}

export default LifeCycleFunction;
