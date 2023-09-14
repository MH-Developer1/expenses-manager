import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {

    const [Title, setTitle] = useState(props.expenses.title)
    const HandleClick = () => {
          setTitle('I am Updated')
    }
    return (
        <>
            <Card className="expense-item">
                <ExpenseDate date={props.expenses.date} />
                <div className="expense-item__description">
                    <h2>{Title}</h2>
                    <div className="expense-item__price">${props.expenses.amount}</div>
                    <button onClick={HandleClick}>Click</button>
                </div>
            </Card>
        </>
    )
}

export default ExpenseItem