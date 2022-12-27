function canExit(maze) {
    function fillPath(line) {
        return line
            .join("")
            .replace(/[S][\sE]/g, "SS")
            .replace(/[\sE][S]/g, "SS")
            .split("")
    }
    const x = maze[0].length
    const y = maze.length
    const area = x * y

    new Array(area).fill('').forEach(() => {
        maze.map((hor, i) => {
            maze[i] = fillPath(hor)
            maze[i] = maze[i]
                .map((_, j) => fillPath(maze.map(x => x[j]))[i])
        })
    })

    return !maze.flat(2).includes("E")
}

module.exports = canExit