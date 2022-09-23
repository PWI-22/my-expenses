import { format } from "date-fns"

export const formatDate = (date) => {
    const dateToFormat = new Date(date)
    return format(dateToFormat, 'dd/MM/yyyy')
}
