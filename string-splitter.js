function splitString(str, sep, idx=0, arr=[], acc=[]) {
    //base case
    if (!str[idx]) {
        return arr.push(acc.join(''))
    }
    //separator
    if (str[idx] === sep) {
        arr.push(acc.join(''))
        return splitString(str, sep, idx + 1, arr)
    }
    //immediate result accumulator
    acc.push(str[idx])
    //recursive case
    return splitString(str, sep, idx + 1, arr, acc)
}

splitString('i{love{to{eat{lemons', '{')

//this one was fun. i just wrote a higher-order function?!?!

module.exports = splitString