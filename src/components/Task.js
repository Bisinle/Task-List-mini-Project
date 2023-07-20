import React from "react";

function Task({ text, category, id, deleteTaskItem }) {
  // console.log(index);

  function deleteHandle(id) {
    deleteTaskItem(id);
    console.log(id);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button
        className="delete"
        onClick={() => {
          deleteHandle(id);
        }}
      >
        X
      </button>
    </div>
  );
}

export default Task;
