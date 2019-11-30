function powerCalculator(i, n) {
    //base case
    if (n === 1 || n === 0) {
        return i
    } else if (n < 0) {
        //prevent negative exponents
        return 'exponent should be >= 0'
    }
    return i * powerCalculator(i, n - 1)
}

module.exports = powerCalculator