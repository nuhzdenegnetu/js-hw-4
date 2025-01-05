import { curriedAdd } from './curriedAdd'

test('adds 1 + 2 + 3 to equal 6', () => {
  expect(curriedAdd(1)(2)(3)).toBe(6)
})

test('adds 4 + 5 + 6 to equal 15', () => {
  expect(curriedAdd(4)(5)(6)).toBe(15)
})
