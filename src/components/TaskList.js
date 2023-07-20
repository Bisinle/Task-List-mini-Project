import React from "react";
import Task from "./Task";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //for generating unique IDs
export default function TaskList({ tasks, ReceiveCategory }) {
  //give each task an  unique ID
  const tasksWithId = tasks.map((task) => {
    return { ...task, id: uuidv4() };
  });
  //initialize the state with tasksWithID
  const [TaskListState, setTaskListState] = useState(tasksWithId);
  const [category, setcategory] = useState("All");

  //map through our list and then display what the Task component returns
  const taskList = TaskListState.map((currentTask) => {
    // console.log(currentTask);
    return (
      <span key={currentTask.id}>
        <Task
          text={currentTask.text}
          category={currentTask.category}
          id={currentTask.id}
          deleteTaskItem={deleteTaskItem}
        />
      </span>
    );
  });
  //filter our Tasks by category and then map through them so we can display them
  const filterByCategory = TaskListState.filter(
    (task) => task.category === ReceiveCategory
  );
  const mappedFilterByCategory = filterByCategory.map((currentTask) => {
    return (
      <span key={currentTask.id}>
        <Task
          text={currentTask.text}
          category={currentTask.category}
          id={currentTask.id}
          deleteTaskItem={deleteTaskItem}
        />
      </span>
    );
  });

  //Delete a task from the TaskListState depending on the ID that was sent from the Task component
  function deleteTaskItem(id) {
    console.log(id);
    const filtered = TaskListState.filter((thisTask) => thisTask.id !== id);
    setTaskListState(filtered);
  }
  // console.log(TaskListState);

  return (
    <div className="tasks">
      {ReceiveCategory === category ? taskList : mappedFilterByCategory}
    </div>
  );
}
