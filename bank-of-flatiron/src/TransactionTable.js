import React from "react";

function TransactionTable({ transactionRecords, onDeleteTransaction }) {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactionRecords.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>
                <button onClick={() => onDeleteTransaction(transaction.id)} >
                  Delete
                </button>
              </td>
          </tr>
        ))}
      </tbody>
      </table>
  );
}

export default TransactionTable;
