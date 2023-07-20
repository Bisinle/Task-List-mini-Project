import React from "react";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [ReceiveCategory, setReceiveCategory] = useState("All");

  function categoryTransport(category) {
    setReceiveCategory(category);
    console.log(category);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        CATEGORIES={CATEGORIES}
        categoryTransport={categoryTransport}
      />
      <NewTaskForm />
      <TaskList tasks={TASKS} ReceiveCategory={ReceiveCategory} />
    </div>
  );
}

export default App;
