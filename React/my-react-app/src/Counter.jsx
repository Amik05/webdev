import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
    setIsPressed(true);
  };
  const reset = () => {
    setCount(0);
    setIsPressed(false);
  };

  return (
    <div className="counter-container">
      <h1 className="counter" style={{ color: isPressed ? "red" : "black" }}>
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
