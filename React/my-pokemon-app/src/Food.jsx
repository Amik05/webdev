function Food() {
  const meals = ["Plov", "Beshbarmak", "Manti", "Lagman"];
  return (
    <ul>
      <li>{meals[0]}</li>
      <li>{meals[1]}</li>
      <li>{meals[2]}</li>
      <li>{meals[3]}</li>
    </ul>
  );
}

export default Food;
