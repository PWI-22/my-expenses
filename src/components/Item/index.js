import { formatDate } from "../../utils/date"
import { formatMoney } from "../../utils/number"

const ExpenseItem = ({ expense }) => {

    return (
        <tr>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>{formatDate(expense.date)}</td>
            <td>{formatMoney(expense.value)}</td>
        </tr>
    )
}

export default ExpenseItem
