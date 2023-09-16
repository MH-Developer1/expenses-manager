import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [chosenYear, setChosenYear] = useState('2020')
    // const [expensesN, setExpensesN] = useState(props.expenses)

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear() === parseInt(chosenYear);
    });
    
    const getYearValue = (selectedYear) => {
        setChosenYear(selectedYear);
        // setExpensesN(filteredExpenses)
    }
    

    return (
        <>
            <Card className="expenses">
                <ExpensesFilter selected={chosenYear} yearValue={getYearValue} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </>


    )
}

export default Expenses