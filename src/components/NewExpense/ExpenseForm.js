import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [AddExpenseBtn, setAddExpenseBtn] = useState(true)

    const handleClick = () =>{
        if (AddExpenseBtn) {
            setAddExpenseBtn(false)
        } else {
            setAddExpenseBtn(true)
        }
    }

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const handleInputOnChange = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
    }

    const handleAmountOnChange = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })

        // setUserInput((prevState => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value
        //     }
        // }))
    }

    const handleDateOnChange = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

        console.log(expenseData);
        props.onSaveExpenseForm(expenseData)
        handleClick()
    }

    return (
        <>
            {!AddExpenseBtn && <form action="" onSubmit={handleSubmit}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="title">Title</label>
                        <input id='title' value={enteredTitle} type="text" onChange={handleInputOnChange} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="amount">Amount</label>
                        <input id='amount' value={enteredAmount} type="number" min='0.01' step='0.01' onChange={handleAmountOnChange} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="Date">Date</label>
                        <input id='Date' value={enteredDate} type="date" min='2019-01-01' max='2022-12-31' onChange={handleDateOnChange} />
                    </div>
                </div>

                <div className="new-expense__actions">
                    <button onClick={handleClick}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>}
            {AddExpenseBtn && <button onClick={handleClick}>Add New Expense</button>}
        </>
    )
}

export default ExpenseForm