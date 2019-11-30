function reverseString(str, arr=str.split('')) {
    //base case
    if (arr.length === (str.length * 2)) {
        return arr.slice(str.length).join('')
    }
    //a bit of tinkering
    arr.push(str[str.length - ((arr.length + 1) - str.length)])
    //recursive case
    return reverseString(str, arr)
}

module.exports = reverseString