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
                 {props.expenses.map((expense)=>(<ExpenseItem key={expense.id} expenses={expense}/>))}
            </Card>
        </>

        
    )
}

export default Expenses