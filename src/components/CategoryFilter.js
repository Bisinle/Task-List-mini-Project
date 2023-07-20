import React from "react";
import { useState } from "react";
import TaskList from "./TaskList";

function CategoryFilter({ CATEGORIES, categoryTransport }) {
  const [SelectedCategory, setSelectedCategory] = useState(null);

  // console.log(CATEGORIES);
  function btnHandle(category) {
    setSelectedCategory(category);
    categoryTransport(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>

      {CATEGORIES.map((category) => {
        return (
          <button
            className={category === SelectedCategory ? "selected" : ""}
            key={category}
            onClick={() => btnHandle(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
