import orderTotal from './index'

it('Quantity', () =>
  expect(orderTotal({
    items: [
      {name: 'health potion', price: 50, quantity: 5}
    ]
  })).toBe(250)
)

it('no quantity specified', () =>
  expect(orderTotal({
    items: [
      {name: 'longsword', price: 350}
    ]
  })).toBe(350)
)

it('Happy path example 1', () =>
  expect(orderTotal({
    items: [
      {name: 'longsword', price: 350, quantity: 2},
      {name: 'dagger', price: 300, quantity: 1}
    ]
  })).toBe(1000)
)