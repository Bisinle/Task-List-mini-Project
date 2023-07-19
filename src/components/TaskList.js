import React from "react";
import Task from "./Task";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TaskList({ tasks }) {
  // console.log(tasks);
  const [TaskListState, setTaskListState] = useState(tasks);

  //map through the tasks array and send each objecct to TASK returning an array of spans
  const task = TaskListState.map((task) => {
    //copy the tasks objects and add an id key to with value set to the object index
    const newTaskObject = { ...task, id: uuidv4() };
    console.log(newTaskObject.id);
    return (
      <span key={newTaskObject.id}>
        <Task task={newTaskObject} deletList={deletList} />
      </span>
    );
  });

  function deletList(id) {
    // console.log(id);
    const taskCopy = [...task];
    // console.log(taskCopy[id].key);
    const filtered = taskCopy.filter(
      (thisObject) => thisObject.props.children.props.task.id != id
    );
    console.log(filtered);
    setTaskListState(filtered);
  }

  /**function deletList(id) {
  const updatedTasks = task.filter((taskSpan) => taskSpan.key !== id.toString());
  setTaskListState(updatedTasks.map((taskSpan, index) => React.cloneElement(taskSpan, { key: index })));
}
 */
  console.log(task);
  return <div className="tasks">{task}</div>;
}

export default TaskList;
