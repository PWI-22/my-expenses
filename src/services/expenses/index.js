const STORAGE_KEY = 'my-expenses'

export const getItems = () => {
    const tempList = localStorage.getItem(STORAGE_KEY)
        
    if (tempList != null) {
        return JSON.parse(tempList)
    }

    return []
}

export const save = (newExpenses) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newExpenses))
}
