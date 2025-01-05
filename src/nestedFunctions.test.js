import { outerFunction } from './nestedFunctions'

test('multiplies 2 * 3 * 4 to equal 24', () => {
  expect(outerFunction(2)(3)(4)).toBe(24)
})

test('multiplies -5 * 2 * 10 to equal -100', () => {
  expect(outerFunction(-5)(2)(10)).toBe(-100)
})

test('multiplies 1 * 5 * -3 to equal -15', () => {
  expect(outerFunction(1)(5)(-3)).toBe(-15)
})
