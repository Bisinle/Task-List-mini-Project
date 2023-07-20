import React from "react";
import { useState } from "react";

function CategoryFilter({ CATEGORIES }) {
  const [SelectedCategory, setSelectedCategory] = useState(null);
  const [buttonClassName, setButtonClassName] = useState("");
  // console.log(CATEGORIES);
  function btnHandle(category) {
    setSelectedCategory(category);
  }


  const categoryButtons = CATEGORIES.map((category) => {
    return (
      <button
        className={category === SelectedCategory ? "selected" : ""}
        key={category}
        onClick={() => btnHandle(category)}
      >
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>

      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
