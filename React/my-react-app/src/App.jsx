import List from "./List.jsx";
import UserGreeting from "./UserGreeting.jsx";
import Button from "./Button.jsx";
import Counter from "./Counter.jsx";
import InputName from "./InputName.jsx";
import ColorPicker from "./ColorPicker.jsx";
import ObjectChange from "./ObjectChange.jsx";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 105 },
    { id: 3, name: "Cherry", calories: 50 },
    { id: 4, name: "Date", calories: 277 },
  ];

  const vegetables = [
    { id: 1, name: "Carrot", calories: 25 },
    { id: 2, name: "Broccoli", calories: 50 },
    { id: 3, name: "Cabbage", calories: 22 },
    { id: 4, name: "Spinach", calories: 23 },
  ];
  return (
    <>
      {/* <UserGreeting isLoggedIn={false} username="Alice" /> */}
      {/* <div className="container">
        <List />
        {fruits.length > 0 && (
          <List items={fruits} category="Low-Calorie Fruits" />
        )}
        <List items={vegetables} category="Low-Calorie Vegetables" />
      </div> */}
      {/* <InputName /> */}
      <Counter />
      {/* <ColorPicker /> */}
      {/* <ObjectChange /> */}
    </>
  );
}

export default App;
