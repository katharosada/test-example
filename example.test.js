
const myFunc = require('./example')

test('myFunc returns hello', () => {
    const result = myFunc()
    expect(result).toBe("hello there");
});