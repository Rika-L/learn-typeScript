// 泛型 动态类型
function xiaomin<T>(a: T, b: T): T[] {
  return [a, b]
}

xiaomin(1, 2) // [1, '2']
xiaomin(false, true) // [false, true]
xiaomin('hello', 'world') // ['hello', 'world']

type A<T> = string | number | T

// function add<T extends number>(a: T, b: T) {
//   return a + b
// }

function fn<T extends { length: number }>(a: T) {
  console.log(a.length)
}

fn('hello')
fn([1, 2, 3])
// fn(undefined)
