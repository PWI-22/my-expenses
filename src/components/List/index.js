import ExpenseItem from "../Item"

const ExpensesList = ({ expenses }) => {

    return (
        <table width="70%" border="1">
            <thead>
                <tr>
                    <th width="40%">Descrição</th>
                    <th width="20%">Categoria</th>
                    <th width="20%">Data</th>
                    <th width="20%">Valor</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense, index) => (
                    <ExpenseItem key={index} expense={expense} />
                ))}
            </tbody>
        </table>
    )
}

export default ExpensesList