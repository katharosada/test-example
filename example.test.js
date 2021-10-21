
const mostCommonWord = require('./example')

test('mostCommonWord returns only word', () => {
    const result = mostCommonWord(["hello"])
    expect(result).toBe("hello");
});

test('mostCommonWord returns only word when there are two', () => {
    const result = mostCommonWord(["hello", "hello"])
    expect(result).toBe("hello");
});

test('mostCommonWord is hello when there are two hellos and one other word', () => {
    const result = mostCommonWord(["hello", "hello", "other"])
    expect(result).toBe("hello");
});

test('mostCommonWord is hello when there are two hellos and one other word', () => {
    const result = mostCommonWord(["other", "hello", "hello"])
    expect(result).toBe("hello");
});

test('mostCommonWord is something when there are lots of duplicates', () => {
    const result = mostCommonWord(["other", "something", "hello", "hello", "other", "something", "something"])
    expect(result).toBe("something");
});

test('mostCommonWord when there is a tie, should return the first one from the list', () => {
    const result = mostCommonWord(["other", "hello", "hello", "other"])
    expect(result).toBe("other")
})
