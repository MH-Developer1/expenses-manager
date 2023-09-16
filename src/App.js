import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 78,
    date: new Date(2021, 2, 12)
  },
  // {
  //   id: 'e3',
  //   title: 'Car Insurance',
  //   amount: 50,
  //   date: new Date(2021, 2, 28),
  // },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 105,
    date: new Date(2021, 8, 12),
  },
  {
    id: 'e5',
    title: 'Poetry Book',
    amount: 45,
    date: new Date(2020, 7, 12),
  },
  {
    id: 'e6',
    title: 'Laptop Table',
    amount: 10,
    date: new Date(2020, 8, 12),
  },
  {
    id: 'e7',
    title: 'Air Buds',
    amount: 5,
    date: new Date(2020, 8, 12),
  },
  {
    id: 'e8',
    title: 'Motivational Book',
    amount: 40,
    date: new Date(2019, 8, 12),
  },
  {
    id: 'e9',
    title: 'Keyboard',
    amount: 46,
    date: new Date(2022, 8, 12),
  },
  {
    id: 'e10',
    title: 'New Plot',
    amount: 4000,
    date: new Date(2022, 8, 12),
  },
];


function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const handleNewData = (expenseData) => {
    const newData = {
      ...expenseData,
      id: Math.random()
    }

    setExpenses(prevExpenses => {
      return [newData, ...prevExpenses]
    })
  }

  return (
    <>
      <NewExpense onSaveNewData={handleNewData} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
