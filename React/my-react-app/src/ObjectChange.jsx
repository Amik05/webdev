import React, { useState } from "react";
import List from "./List";

function ObjectChange() {
  const [car, setCar] = useState({
    year: new Date().getFullYear(),
    make: "Honda",
    model: "Civic",
  });

  const handleYearChange = (event) => {
    setCar((c) => ({ ...c, year: event.target.value }));
  };
  const handleMakeChange = (event) => {
    setCar((c) => ({ ...c, make: event.target.value }));
  };
  const handleModelChange = (event) => {
    setCar((c) => ({ ...c, model: event.target.value }));
  };

  const [carlist, setCarlist] = useState([]);

  const handleAddCar = (car) => {
    const newCar = `${car.make} ${car.model} ${car.year}`;
    setCarlist((c) => [...c, newCar]);
  };

  const handleRemoveCar = (index) => {
    setCarlist(carlist.filter((_, i) => i !== index));
  };

  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      {/* Add cars to the list */}
      <button onClick={() => handleAddCar(car)}>Add Car</button>
      <p>List of Cars</p>
      <ul>
        {carlist.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ObjectChange;
