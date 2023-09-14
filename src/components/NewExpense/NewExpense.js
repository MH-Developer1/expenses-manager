import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const handleOnSave = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random()
    }
    props.onSaveNewData(expenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseForm={handleOnSave} />
    </div>
  )
}

export default NewExpense