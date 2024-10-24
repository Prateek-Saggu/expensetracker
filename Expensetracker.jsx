import React, { useState } from 'react';
import "./Expensetracker.css";


const Expensetracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = () => {
    if (description && amount) {
      const newExpense = {
        id: Math.random(),
        description,
        amount: parseFloat(amount).toFixed(2),
      };
      setExpenses([...expenses, newExpense]);
      setDescription('');
      setAmount('');
    }
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const totalExpense = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0).toFixed(2);

  return (
    <section id="tracker" className="expense-tracker">
      <h2>Track Your Expenses</h2>
      <div className="expense-form">
        <input
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>

      <ul className="expense-list">
        {expenses.length === 0 ? (
          <p>No expenses yet.</p>
        ) : (
          expenses.map((expense) => (
            <li key={expense.id}>
              {expense.description}: ${expense.amount}
              <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
      <h3>Total Expense: ${totalExpense}</h3>
    </section>
  );
};

export default Expensetracker;
