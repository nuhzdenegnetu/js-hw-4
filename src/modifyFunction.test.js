import { modifyFunction, originalFunction } from './modifyFunction'

test('originalFunction returns square of the input', () => {
  expect(originalFunction(3)).toBe(9) // 3 * 3 = 9
})

test('modifies originalFunction output to be square of input multiplied by 2', () => {
  const modifiedFunc = modifyFunction(originalFunction, 2)
  expect(modifiedFunc(4)).toBe(32) // (4 * 4) * 2 = 32
})

test('modifies originalFunction output to be square of input multiplied by 5', () => {
  const modifiedFunc = modifyFunction(originalFunction, 5)
  expect(modifiedFunc(2)).toBe(20) // (2 * 2) * 5 = 20
})
