import { useEffect, useState } from "react"
import ExpensesList from './components/List'

const STORAGE_KEY = 'my-expenses'

const App = () => {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')

    const [items, setItems] = useState([])

    useEffect(() => { 
        const tempList = localStorage.getItem(STORAGE_KEY)
        
        if (tempList != null) {
            setItems(JSON.parse(tempList))
        }
    }, [])

    const save = () => {
        const expense = {
            description,
            value,
            date,
            category,
        }
        const newExpenses = [...items, expense]

        setItems(newExpenses)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newExpenses))
        clearForm()
    }

    const clearForm = () => {
        setDescription('')
        setValue('')
        setDate('')
        setCategory('')
    }

    return (
        <div>
            <h1>My Expenses</h1>

            Descrição: <br />
            <input type="text" size="35" value={description}
                onChange={event => setDescription(event.target.value)} />

            <br /><br />

            Data: <br />
            <input type="date" value={date}
                onChange={event => setDate(event.target.value)} />

            <br /><br />

            Valor: <br />
            <input type="text" value={value}
                onChange={event => setValue(event.target.value)} />

            <br /><br />

            Categoria: <br />
            <select value={category} onChange={event => setCategory(event.target.value)}>
                <option value=""></option>
                <option value="Alimentação">Alimentação</option>
                <option value="Vestuário">Vestuário</option>
                <option value="Utilidades">Utilidades</option>
                <option value="Transporte">Transporte</option>
                <option value="Entretenimento">Entretenimento</option>
            </select>

            <br /><br />
            <input type="button" value="Salvar" onClick={save} /> &nbsp;
            <input type="button" value="Cancelar" onClick={clearForm} />

            <br /><br />

            <ExpensesList expenses={items}/>

        </div>
    )
}


export default App