function solveMaze(maze, acc=[], x=0, y=0) {
    if (maze[y][x] === 'e') {
        //base case
        return `A possible solution to the maze is: ${acc}`
    } else if (maze[y][x + 1] === ' ' || maze[y][x + 1] === 'e') { 
        //handle right space
        acc.push('R')
        return solveMaze(maze, acc, x + 1, y)
    } else if (maze[y + 1][x] === ' ' || maze[y + 1][x] === 'e') { 
        //handle down space
        acc.push('D')
        return solveMaze(maze, acc, x, y + 1)
    } else if (maze[y][x - 1] === ' ' || maze[y][x - 1] === 'e') { 
        //handle left space
        acc.push('L')
        return solveMaze(maze, acc, x - 1, y)
    } else if (maze[y - 1][x] === ' ' || maze[y - 1][x] === ' ') { 
        //handle up space
        acc.push('U')
        return solveMaze(maze, acc, x, y - 1) 
    }
}

const testMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]

console.log(solveMaze(testMaze))

module.exports = solveMaze