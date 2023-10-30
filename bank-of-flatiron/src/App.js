import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable"; // Import the TransactionTable component
import TransactionFilter from "./TransactionFilter"; // Import the TransactionFilter component
import AddTransaction from "./AddTransaction"; // Import the AddTransaction component


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

  const handleAddTransaction = (newTransaction) => {
    // Update the list of transactions by adding the new transaction
    setTransactionRecords([...transactionRecords, newTransaction]);
  };
  

  const handleDeleteTransaction = (id) => {
    // Remove the transaction from the table
    const updatedTransactions = transactionRecords.filter(
      (transaction) => transaction.id !== id
    );

    // Send a DELETE request to the API to remove the transaction
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Update the local state after the transaction is deleted
        setTransactionRecords(updatedTransactions);
      })
      .catch((error) => {
        console.error("Error deleting transaction:", error);
      });
  };

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
          <div className="column-2">
          <AddTransaction onAddTransaction={handleAddTransaction} />
          <TransactionTable transactionRecords= {filteredTransactions} onDeleteTransaction={handleDeleteTransaction} />
          </div>
          
        </div>
       </div>
    
    </div>
  );
}

export default App;
