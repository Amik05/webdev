import React, { use, useState } from "react";

function Todo() {
  const [taskList, setTaskList] = useState([
    "Eat",
    "Go to the gym",
    "Take a shower",
  ]);

  const [task, setTask] = useState("");

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = (task) => {
    setTaskList((tlist) => [...tlist, task]);
    setTask("");
  };

  const handleRemoveTask = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  const handleMoveUpTask = () => {};
  const handleMoveDownTask = () => {};

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={handleTaskChange}
        placeholder="Enter a task..."
      />
      <button onClick={() => handleAddTask(task)}>Add</button>

      <ol>
        {taskList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(index)}>❌</button>
            <button>⬆️</button>
            <button>⬇️</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
