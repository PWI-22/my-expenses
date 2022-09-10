import { useEffect, useState } from "react"
import ExpensesForm from "./components/Form"
import ExpensesList from './components/List'

const STORAGE_KEY = 'my-expenses'

const App = () => {
    const [items, setItems] = useState([])

    useEffect(() => { 
        const tempList = localStorage.getItem(STORAGE_KEY)
        
        if (tempList != null) {
            setItems(JSON.parse(tempList))
        }
    }, [])

    const updateList = (expense) => {
        const newExpenses = [...items, expense]

        setItems(newExpenses)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newExpenses))
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