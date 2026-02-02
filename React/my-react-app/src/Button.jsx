import React, { use, useState } from "react";

function Button() {
  const [name, setName] = useState("Amir");
  const [age, setAge] = useState(0);
  const [isEmployee, setIsEmployee] = useState(false);

  const updateName = () => {
    setName("Alex");
  };

  const updateAge = () => {
    setAge(age + 1);
  };

  const toggleEmployeeStatus = () => {
    setIsEmployee(!isEmployee);
  };

  return (
    <div>
      <h1>Name: {name}</h1>
      <button onClick={updateName}>Update Name</button>
      <h2>Age: {age}</h2>
      <button onClick={updateAge}>Update Age</button>
      <h2>Employee Status: {isEmployee ? "Employed" : "Unemployed"}</h2>
      <button onClick={toggleEmployeeStatus}>Toggle Employee Status</button>
    </div>
  );
}

export default Button;
