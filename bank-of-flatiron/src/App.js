import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable"; // Import the TransactionTable component
import TransactionFilter from "./TransactionFilter"; // Import the TransactionFilter component


function App() {
  // Define state to store the transaction data
  const [transactionRecords, setTransactionRecords] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");

  useEffect(() => {
    // Send a fetch request to the API and set the transactionRecords state
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactionRecords(data);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  }, []); // Empty dependency array means this effect runs once on component mount

  const handleCategorySelect = (category) => {
    setFilteredCategory(category);
  };

  const filteredTransactions =
    filteredCategory === "All" ? transactionRecords : transactionRecords.filter(
          (transaction) => transaction.category === filteredCategory
        );


  return (
    <div class="container" >
      <div class="section-header">
        <h3 id="sectionHeader" class="title" data-title="Bank Transaction Manager">All Transactions</h3>
        <p class="text">
        </p>
      </div>

      <div class="cards">
        <div className = "container grid-2">
          <div className = "column-1">
          <TransactionFilter transactionCategory={filteredCategory} onCategorySelect={handleCategorySelect} />
          </div>
          <TransactionTable transactionRecords= {filteredTransactions} />
        </div>
       </div>
    
    </div>
  );
}

export default App;
