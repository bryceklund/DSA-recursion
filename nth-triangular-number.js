function nthTriangularNumber(n) {
    //base case
    if (n === 0) {
        return n
    }
    //recursive case
    return n + nthTriangularNumber(n - 1)
}