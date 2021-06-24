import React from "react";

const Categories = ({ filterCat, filter }) => {
  return (
    <>
      {filterCat.map((c) => {
        return (
          <button
            className="filter-btn button"
            onClick={() => {
              filter(c);
            }}
          >
            {c}
          </button>
        );
      })}
    </>
  );
};

export default Categories;
