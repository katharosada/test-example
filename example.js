
function mostCommonWord(words) {
    const counts = {}
    words.forEach(word => {
        if (counts[word]) {
            counts[word] += 1
        } else {
            counts[word] = 1
        }
    })
    let maxWord = [];
    let maxCount = 0
    for (let word in counts) {
        if (counts[word] === maxCount) {
            maxWord.push(word)
        }
        if (counts[word] > maxCount) {
            maxCount = counts[word]
            maxWord = [word]
        }
    }
    return maxWord
}

module.exports = mostCommonWord