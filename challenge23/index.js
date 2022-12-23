// Complejidad cognitiva: 8
function executeCommands(commands) {
    const normalizeNumber = (number) => {
        if (number > 255) return number - 256
        if (number < 0) return number + 256
        return number
    }

    const dictionary = {
        MOV: (a, b, registers) => {
            const pos1 = Number(a.slice(1))
            const pos2 = Number(b.slice(1))
            a.includes('V')
                ? registers[pos2] = registers[pos1]
                : registers[pos2] = Number(a)
        },
        ADD: (a, b, registers) => {
            const pos1 = Number(a.slice(1))
            const pos2 = Number(b.slice(1))
            registers[pos1] = normalizeNumber(registers[pos1] + registers[pos2])
        },
        DEC: (a, _, registers) => {
            const pos1 = Number(a.slice(1))
            registers[pos1] = normalizeNumber(registers[pos1] - 1)
        },
        INC: (a, _, registers) => {
            const pos1 = Number(a.slice(1))
            registers[pos1] = normalizeNumber(registers[pos1] + 1)
        },
        JMP: (a, _, registers, commands, current) => {
            if (registers[0] === 0) return

            commands.slice(a, current + 1).forEach(command => {
                const [action, args] = command.split(' ')
                const [pos1, pos2] = args.split(',')
                dictionary[action](
                    pos1,
                    pos2,
                    registers,
                    commands,
                    commands.indexOf(command)
                )
            })
        }
    }

    let registers = [0, 0, 0, 0, 0, 0, 0, 0]
    commands.forEach(command => {
        const [action, args] = command.split(' ')
        const [pos1, pos2] = args.split(',')
        dictionary[action](
            pos1,
            pos2,
            registers,
            commands,
            commands.indexOf(command)
        )
    })
    return registers
}

module.exports = executeCommands