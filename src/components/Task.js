import React from "react";

function Task({ task, deletList }) {
  const { text, category, id } = task;
  // console.log(index);


  
  function deleteHandle(id) {
    deletList(id);
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
