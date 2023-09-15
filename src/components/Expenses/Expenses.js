import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [chosenYear, setChosenYear] = useState('2020')

    const getYearValue = (selectedYear) =>{
       setChosenYear(selectedYear);
    }

    return (
        <>
            <Card className="expenses">
                <ExpensesFilter selected={chosenYear} yearValue={getYearValue}/>

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