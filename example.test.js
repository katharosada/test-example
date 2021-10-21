const mostCommonWord = require('./example')

test('mostCommonWord returns only word when there is one word', () => {
    const result = mostCommonWord(["hello"])
    expect(result).toStrictEqual(["hello"]);
});

test('mostCommonWord returns the even when duplicates of other words', () => {
    const result = mostCommonWord(["hello", "congratulations", "hello", "the", "the", "the"])
    expect(result).toStrictEqual(["the"]);
});

test('mostCommonWord handles two words which are both most common', () => {
    const result = mostCommonWord(["congratulations", "congratulations", "hello", "hello"])
    expect(result).toStrictEqual(["congratulations", "hello"]);
});

test('mostCommonWord handles an empty array', () => {
    const result = mostCommonWord([])
    expect(result).toStrictEqual([]);
});