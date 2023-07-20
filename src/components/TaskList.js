import React from "react";
import Task from "./Task";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TaskList({ tasks }) {
  //give each task an  unique ID
  const tasksWithId = tasks.map((task) => {
    return { ...task, id: uuidv4() };
  });
  //initialize the state with tasksWithID
  const [TaskListState, setTaskListState] = useState(tasksWithId);

  //filter the TaskListState depending on the ID that was sent from the Task component
  function deletList(id) {
    console.log(id);
    const filtered = TaskListState.filter((thisTask) => thisTask.id !== id);
    setTaskListState(filtered);
  }
  console.log(TaskListState);

  return (
    <div className="tasks">
      {TaskListState.map((currentTask) => {
        return (
          <span key={currentTask.id}>
            <Task task={currentTask} deletList={deletList} />
          </span>
        );
      })}
    </div>
  );
}

