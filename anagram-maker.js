function anagram(word) {
    let results = []
    
    //base case
    if (word.length === 1) {
        results.push(word)
        return results
    }

    for (let i = 0; i < word.length; i++) {
        let firstChar = word[i]
        let remainingChars = word.substring(0, i) + word.substring(i + 1)
        let innerCombos = anagram(remainingChars) 
        for (let j = 0; j < innerCombos.length; j++) {
            results.push(firstChar + innerCombos[j])
        }
    }
    return results
}

console.log(anagram('test'))