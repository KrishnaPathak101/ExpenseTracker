import React, { useState } from 'react';

const Home = () => {
  // State to track wallet balance and expenses
  const [wallet, setWallet] = useState(1000); // Starting with 1000
  const [expenses, setExpenses] = useState([]);
  const [expenseDesc, setExpenseDesc] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [walletAmount, setWalletAmount] = useState('');

  // Add an expense
  const addExpense = () => {
    if (expenseDesc && expenseAmount > 0) {
      const newExpense = {
        description: expenseDesc,
        amount: parseFloat(expenseAmount),
      };
      setExpenses([...expenses, newExpense]);
      setWallet(wallet - parseFloat(expenseAmount)); // Deduct from wallet
      setExpenseDesc('');
      setExpenseAmount('');
    }
  };

  // Add money to the wallet
  const addMoney = () => {
    if (walletAmount > 0) {
      setWallet(wallet + parseFloat(walletAmount)); // Add to wallet
      setWalletAmount('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-5">Expense Tracker</h1>

      {/* Wallet Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold">Wallet Balance: <span className="text-green-500">${wallet.toFixed(2)}</span></h2>
        
        {/* Add money to wallet */}
        <div className="flex mt-4">
          <input
            type="number"
            value={walletAmount}
            onChange={(e) => setWalletAmount(e.target.value)}
            placeholder="Amount"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
          <button
            onClick={addMoney}
            className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600"
          >
            Add Money
          </button>
        </div>
      </div>

      {/* Add Expense Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mt-6">
        <h2 className="text-2xl font-semibold">Add Expense</h2>
        <input
          type="text"
          value={expenseDesc}
          onChange={(e) => setExpenseDesc(e.target.value)}
          placeholder="Expense Description"
          className="border border-gray-300 rounded-md px-3 py-2 w-full mt-2"
        />
        <input
          type="number"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
          placeholder="Amount"
          className="border border-gray-300 rounded-md px-3 py-2 w-full mt-2"
        />
        <button
          onClick={addExpense}
          className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600 w-full"
        >
          Add Expense
        </button>
      </div>

      {/* Expense History Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mt-6">
        <h2 className="text-2xl font-semibold">Expense History</h2>
        <ul className="mt-4">
          {expenses.length > 0 ? (
            expenses.map((expense, index) => (
              <li
                key={index}
                className="flex justify-between py-2 border-b border-gray-200"
              >
                <span>{expense.description}</span>
                <span className="text-red-500">-${expense.amount.toFixed(2)}</span>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No expenses added yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;
