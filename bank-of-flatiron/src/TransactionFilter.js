import React, { useState } from "react";

function TransactionFilter({ transactionCategory, onCategorySelect }) {
  const categories = ["All", "Income", "Food", "Fashion", "Gift", "Transportation", "Entertainment", "Housing"];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="transaction-filter">
    <h1>Filter By Category</h1>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );

}


export default TransactionFilter;
