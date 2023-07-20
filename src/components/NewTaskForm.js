import React, { useState } from "react";

function NewTaskForm({ CATEGORIES, onTaskFormSubmit }) {
  // console.log(CATEGORIES);
  const [TaskInput, setTaskInput] = useState({
    text: "",
    category: "",
  });

  function inputHandle(e) {
    const { name, value } = e.target;
    setTaskInput((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function formSubmitHandle(e) {
    e.preventDefault();
    if (TaskInput.category === "All" || TaskInput.category === "") {
      alert("Choose a category please");
    } else {
      onTaskFormSubmit(TaskInput);
      setTaskInput({
        text: "",
        category: "",
      });
    }
  }

  const categoryOptions = CATEGORIES.map((category) => (
    <option key={category}>{category}</option>
  ));

  return (
    <form className="new-task-form" onSubmit={formSubmitHandle}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={TaskInput.text}
          onChange={inputHandle}
          required
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={TaskInput.category}
          onChange={inputHandle}
          required
        >
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
