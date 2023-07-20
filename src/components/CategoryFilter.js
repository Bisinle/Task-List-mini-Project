import React from "react";
import { useState } from "react";
import TaskList from "./TaskList";

function CategoryFilter({ CATEGORIES, takeCategoryFromCLtoTL }) {
  const [SelectedCategory, setSelectedCategory] = useState(null);

  // console.log(CATEGORIES);
  function btnHandle(category) {
    setSelectedCategory(category);
    //CL = categoryList   //TL = TaskList
    takeCategoryFromCLtoTL(category);
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
