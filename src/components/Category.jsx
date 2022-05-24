import React from "react";

const Category = ({categories, filterItem }) => {
  return (
    <div className="category">
     {categories.map((cat, index) => <button key={index} onClick={() => filterItem(cat)} >{cat}</button>)}
    </div>
  );
};

export default Category;
