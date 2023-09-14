import React from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <>
            <Card className="expenses">
                <ExpenseItem
                    expenses={props.expenses[0]}
                />
                <ExpenseItem
                    expenses={props.expenses[1]}
                />
                <ExpenseItem
                    expenses={props.expenses[2]}
                />
                <ExpenseItem
                    expenses={props.expenses[3]}
                />
            </Card>
        </>
    )
}

export default Expenses