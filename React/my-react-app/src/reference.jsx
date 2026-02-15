import React, { useEffect, useState, useRef } from "react";

function Reference() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.transition =
      "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    inputRef1.current.style.transform = "scale(1.2)";
    inputRef2.current.style.transform = "scale(1)";
    inputRef3.current.style.transform = "scale(1)";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.style.transition =
      "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    inputRef2.current.style.transform = "scale(1.2)";
    inputRef1.current.style.transform = "scale(1)";
    inputRef3.current.style.transform = "scale(1)";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef3.current.style.transition =
      "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    inputRef3.current.style.transform = "scale(1.2)";
    inputRef2.current.style.transform = "scale(1)";
    inputRef1.current.style.transform = "scale(1)";
  }
  return (
    <div>
      <button onClick={handleClick1}>Click Me</button>
      <input type="text" ref={inputRef1} /> <br />
      <button onClick={handleClick2}>Click Me</button>
      <input type="text" ref={inputRef2} /> <br />
      <button onClick={handleClick3}>Click Me</button>
      <input type="text" ref={inputRef3} />
    </div>
  );
}

export default Reference;
