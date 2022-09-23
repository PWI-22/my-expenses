export const formatMoney = (value) => {
    const fmt = new Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL'
    })

    return fmt.format(value)
}
