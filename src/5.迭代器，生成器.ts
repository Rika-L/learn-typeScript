// const a1: symbol = Symbol(1)
// const a2: symbol = Symbol(1)

// console.log(a1)
// console.log(a2)
// console.log(Symbol.for('hahaha') === Symbol.for('hahaha')) // false

// const obj = {
//   name: 1,
//   [a1]: 111,
//   [a2]: 222,
// }

// 生成器 || 迭代器
function* gen() {
  yield 'Rika' // 同步|异步
  yield 'Lily'
}

const man = gen()

console.log(man.next()) // Rika
console.log(man.next()) // Lily
console.log(man.next()) // undefined

// 迭代器
function each(value: any) {
  const It: any = value[Symbol.iterator]()
  let next: any = { done: false }
  while (!next.done) {
    next = It.next()
    console.log(next.value)
  }
}

each([1, 2, 3]) // 1 2 3

// 迭代器的语法糖
// for...of...
