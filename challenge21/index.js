function printTable(gifts) {
    const left = Math.max("gift".length,
        ...gifts.map(x => x.name.length))
    const right = Math.max("quantity".length,
        ...gifts.map(x => x.quantity.toString().length))

    const getSpacesLeft = (times) => {
        return " ".repeat(left - times.toString().length)
    }

    const getSpacesRight = (times) => {
        return " ".repeat(right - times.toString().length)
    }

    const leftWS = getSpacesLeft("gift")
    const rightWS = getSpacesRight("quantity")

    const top = "+".repeat(left + right + 7)
    const bottom = "*".repeat(left + right + 7)
    const header = `| Gift ${leftWS}| Quantity ${rightWS}|`
    const separator = `| ${"-".repeat(left)} | ${"-".repeat(right)} |`
    const body = gifts.map(({ name, quantity }) => {
        const left = `${name}${getSpacesLeft(name)}`
        const right = `${quantity}${getSpacesRight(quantity)}`
        return `| ${left} | ${right} |`
    })

    return `${top}\n${header}\n${separator}\n${body.join('\n')}\n${bottom}`
}

module.exports = printTable