import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable"; // Import the TransactionTable component

function App() {
  // Define state to store the transaction data
  const [transactionRecords, setTransactionRecords] = useState([]);

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

  return (
    <div>
      <h1>Bank Transaction Manager</h1>
      <TransactionTable transactionRecords={transactionRecords} />
  
    </div>
  );
}

export default App;
