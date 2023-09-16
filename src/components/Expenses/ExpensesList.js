import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
    return (
        <>
            {props.items.length === 0 && <h2 className='expenses-list__fallback'>No Items Found.</h2>}
            <ul className='unList'>{props.items.length > 0 && props.items.map((expense) => (<ExpenseItem key={expense.id} expenses={expense} />))}</ul>
        </>
    )
}

export default ExpensesList