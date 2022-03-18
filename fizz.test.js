const { test, expect } = require('@jest/globals')
const fizzBuzz = require('./fizz')

test('checks the fizzBuzz function', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
})

test('checks the fizzBuzz function', () => {
    expect(fizzBuzz(9)).toBe('Fizz')
})

test('checks the fizzBuzz function', () => {
    expect(fizzBuzz(10)).toBe('Buzz')
})