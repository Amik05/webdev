function List({
  items = [
    { id: 1, name: "Item1", calories: 10 },
    { id: 2, name: "Item2", calories: 20 },
  ],
  category = "Items",
}) {
  const filteredItems = items.filter((fruit) => fruit.calories < 100);

  const listItems = filteredItems.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} - {fruit.calories} calories
    </li>
  ));

  return (
    <>
      <h2 className="list-category">{category}</h2>
      <ul className="list">{listItems}</ul>
    </>
  );
}

export default List;
