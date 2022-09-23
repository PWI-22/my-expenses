import { useEffect, useState } from "react"
import ExpensesForm from "./components/Form"
import ExpensesList from './components/List'
import { expenseService } from "./services"

const App = () => {
    const [items, setItems] = useState([])

    useEffect(() => { 
        const expenses = expenseService.getItems()
        setItems(expenses)
    }, [])

    const updateList = (expense) => {
        const newExpenses = [...items, expense]

        setItems(newExpenses)
        expenseService.save(newExpenses)
    }
    
    return (
        <div>
            <h1>My Expenses</h1>

            <ExpensesForm onSave={updateList}/>
            <br /><br />
            <ExpensesList expenses={items}/>
        </div>
    )
}


export default App