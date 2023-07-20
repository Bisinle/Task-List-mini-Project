import React from "react";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ TASKS });

function App() {
  const [ReceiveCategory, setReceiveCategory] = useState("All");
  const [newTasks, setNewTasks] = useState(TASKS);
  // console.log(newTasks);

  //CL = categoryList  //TL = TaskList
  function takeCategoryFromCLtoTL(category) {
    setReceiveCategory(category);
    console.log(category);
  }

  //tak the form object from NewTaskForm to the TaskList
  //so we can push it into the array before we display it
  function onTaskFormSubmit(formObject) {
    console.log(formObject);
    setNewTasks((prev) => {
      return [...prev, formObject];
    });
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        CATEGORIES={CATEGORIES}
        takeCategoryFromCLtoTL={takeCategoryFromCLtoTL}
      />
      <NewTaskForm
        CATEGORIES={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={newTasks} ReceiveCategory={ReceiveCategory} />
    </div>
  );
}

export default App;
