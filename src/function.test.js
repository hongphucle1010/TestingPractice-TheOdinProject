const {capitalize, reverseString} = require('./function');

test('Define capitalize function', () => {
    expect(capitalize).toBeDefined();
})

test('Define reverseString function', () => {
    expect(reverseString).toBeDefined();
})

test('capitalize first letter of string (Case 1)', () => {
    expect(capitalize('hello')).toBe('Hello');
})

test('capitalize first letter of string (Case 2)', () => {
    expect(capitalize('world')).toBe('World');
})

test('reverse string (Case 1)', () => {
    expect(reverseString('hello')).toBe('olleh');
})

test('reverse string (Case 2)', () => {
    expect(reverseString('world')).toBe('dlrow');
})