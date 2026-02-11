import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount((c) => c - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1
        className="counter"
        style={{ color: count < 0 ? "red" : count > 0 ? "green" : "black" }}
      >
        {count}
      </h1>
      <button className="decrement-btn" onClick={decrement}>
        Decrement
      </button>
      <button className="reset-btn" onClick={reset}>
        Reset
      </button>
      <button className="increment-btn" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
