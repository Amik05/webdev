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
    if (task !== "") {
      setTaskList((tlist) => [...tlist, task]);
      setTask("");
    }
  };

  const handleRemoveTask = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  const handleMoveUpTask = (index) => {
    if (index > 0) {
      const updatedTaskList = [...taskList];
      [updatedTaskList[index], updatedTaskList[index - 1]] = [
        updatedTaskList[index - 1],
        updatedTaskList[index],
      ];

      setTaskList(updatedTaskList);
    }
  };

  const handleMoveDownTask = (index) => {
    if (index < taskList.length - 1) {
      const updatedTaskList = [...taskList];
      [updatedTaskList[index], updatedTaskList[index + 1]] = [
        updatedTaskList[index + 1],
        updatedTaskList[index],
      ];

      setTaskList(updatedTaskList);
    }
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={handleTaskChange}
        placeholder="Enter a task..."
      />
      <button className="add-btn" onClick={() => handleAddTask(task)}>
        Add
      </button>

      <ol>
        {taskList.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="rmv-btn" onClick={() => handleRemoveTask(index)}>
              ❌
            </button>
            <button className="up-btn" onClick={() => handleMoveUpTask(index)}>
              ⬆️
            </button>
            <button
              className="down-btn"
              onClick={() => handleMoveDownTask(index)}
            >
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
