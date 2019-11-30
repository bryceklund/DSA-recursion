function countSheep(sheep) {
    //base case
    if (sheep < 1) {
        return "All sheep jumped over the fence!"
    }
    //recursive case
    return `${sheep} sheep jumped over the fence, \n` + countSheep(sheep - 1)
}

module.exports = countSheep