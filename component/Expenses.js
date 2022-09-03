import './Expenses.css'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react'

const Expenses=(props)=> {
    const [filteredYear,setFilteredYear]=useState('2020');

    const filterChangeHandler= selectedYear =>{
        setFilteredYear(selectedYear);
    }

    const filteredExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear
    })

    return (
        <div className="expenses">
            <ExpenseFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </div>
    )
}

export default Expenses