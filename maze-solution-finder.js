const testMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]

//this maze has three possible solutions: RRDDRRRRDD, RRDDLLDDRRRRRR, and RRDDRRUURRDDDD

for (var i=0; i < testMaze.length; i++) { // rows
    for (var j=0; j < testMaze[i].length; j++) { // cols
        // swap value integer with an objct that contains more information. 
        testMaze[i][j] = { x: j,             // store X position
                        y: i,             // store Y position
                        v: testMaze[i][j],   // store position value
                        toString: function(){return '[' + this.x + ':' + this.y + '(' + this.v + ')]';} // neater way to print this node
                    };
    }
}

let solutions = []

function getArrow(direction) {
    return direction.substring(0,1).toUpperCase()
}

function getNextNode(node, direction) {
    let nextNode = null
    if (node.v === '*') {
        //console.log('>>>>>>>>> WALL FOUND')
        return null
    } else if (node.v === 'e') {
        //console.log('>>>>>>>>>>>>> solution found!')
        return node
    }
    //console.log(direction)

    switch(direction) {
        case 'up':
            if (node.y - 1 >= 0) {
                nextNode = testMaze[node.y - 1][node.x]
            }
        break;
        case 'down':
            if (node.y + 1 < testMaze.length) {
                nextNode = testMaze[node.y + 1][node.x]
            }
        break;
        case 'left':
            if (node.x - 1 >= 0) {
                nextNode = testMaze[node.y][node.x - 1]
            }
        break;
        case 'right':
            if (node.x + 1 < testMaze[0].length) {
                nextNode = testMaze[node.y][node.x + 1]
            }
        break;
        default: console.error('bad direction supplied: ', direction)
    }
    if (nextNode && nextNode.v == 'e') {
        console.log('END FOUND: ', nextNode)
    }
    return nextNode
}

function move(node, direction='right', history=[], acc=[]) {
    //base case
    /*
    if (maze[y][x] === 'e' && !(acc.toString() === solves[solves.length - 1].toString())) { 
        if (solves.length > 0 && (acc.toString() === solves[solves.length - 1].toString())) {
            return `I found ${solves.length} solutions:\n${solves.forEach((solve, i) => {
                return `${i + 1}: ${solve}\n`
            })}`
        }
    } */
    //console.log(`CURRENT COORDINATES: [${node.x}][${node.y}]`)
    // 1. create a new copy history array since it gets passed by reference. 
    console.log(node)
    //console.log('accumulator: ', acc)
    // 2. save current node into current thread history
    history.push(node)
    // 3. get next node
    let nextNode = getNextNode(node, direction)
    if (!nextNode) {
        //console.log('no next node, returning')
        return // no node exists at that address
    } else if (history.some(o => JSON.stringify(o) === JSON.stringify(nextNode))) {
        // 4. check if this node has already been visited. 
        //console.log('loop detected, returning')
        return // loop detected, terminate!
    } else if (nextNode.v == 'e') { 
        // 5. check if this is the final node. 
        //console.log('solution found, returning accumulator')
        acc.push(getArrow(direction)) // solution found! 
        solutions.push(acc)
        return solutions
    } else {
        //onsole.log('adding direction', direction, direction.length)
        acc.push(getArrow(direction))
    }





    //console.log(`current node: '${nextNode.v}'`)
    console.log('solutions: ', solutions)
    // attempt to move in every direction
    move(nextNode, 'up', history, acc)
    move(nextNode, 'down', history, acc)
    move(nextNode, 'right', history, acc)
    move(nextNode, 'left', history, acc)
}


move(testMaze[0][0])
console.log(`I found ${solutions.length} solutions: ${ solutions.forEach((solve, i) => `${i + 1}: ${solve}, `) }`)
//console.log(solutions)

/*
var _maze = [
        
    [6,3,2,4,6,2,5],
    [3,5,2,4,4,4,1],
    [3,3,2,3,3,4,2],
    [3,4,1,2,2,5,3],
    [4,4,4,2,3,2,4],
    [2,5,4,2,3,2,5],
    [3,5,2,1,4,4,0]
    
    // [2,2,1],
    // [1,2,2],
    // [2,2,0]
  ];

var _solutions = [];


function move(node, direction, history) {
// 1. create a new copy history array since it gets passed by reference. 
history = history.slice(0); 
// 2. save current node into current thread history
history.push(getArrow(direction));
history.push(node);
// 3. get next node
var nextNode = getNextNode(node, direction);
if (!nextNode) 
  return; // no node exists at that address
// 4. check if this node has already been visited. 
if (history.some(function(o){
  return o === nextNode;
})){
  return; // loop detected, terminate!
}

// 5. check if this is the final node. 
if (nextNode.v == 'e'){ 
  history.push(nextNode); // solution found! 
  _solutions.push(history);
}
// attempt to move in every direction
move(nextNode, 'up', history);
move(nextNode, 'down', history);
move(nextNode, 'right', history);
move(nextNode, 'left', history);
}


return nextNode;
}
// REPLAY functions ********************************************* //
function getCell(matrixObj){
 return document.getElementById('tableDiv')
    .children[0] // table div
    .children[0] // table
    .rows[ matrixObj.y] // row
    .cells[matrixObj.x]; // return cell 
}

function replay(history, i, lastCell){
if (!history) return;
i = i || 0;
var moves = getMoves(history);
var matrixObject = moves[i];
if (!matrixObject) return;
var c = getCell(matrixObject);
console.log('replay: ', matrixObject.toString());
if (lastCell) 
    lastCell.className = lastCell.className.replace(/(?:^|\s)selected(?!\S)/,'');
c.className += ' selected';
setTimeout(function() {replay(history, i+1, c);}, 300);
}
*/