import React from "react";

function CategoryFilter({categories, selectCategory, setCategory}) {
  function handleCategoryClick(category){
    setCategory(category)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories?.map(category => {
        return (
          <button
            key={category}
            className={category === selectCategory ? 'selected' : null}
            onClick={event => handleCategoryClick(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
