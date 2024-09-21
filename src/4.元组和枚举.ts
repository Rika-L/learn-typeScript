// 元组类型

const arr: readonly [number, boolean] = [1, false]
// arr[0] = 2 // error: Cannot assign to '0' because it is a read-only property.

type first = typeof arr[0] // number
type second = typeof arr['length'] // 2

// 枚举类型 默认从0开始计数
enum Color { Red = 1, Green, Blue }

// 字符串枚举
enum Direction { Up = 'UP', Down = 'DOWN', Left = 'LEFT', Right = 'RIGHT' }

// 异构枚举
enum A {
  yes = 1,
  no = 'no',
}

interface B {
  red: Color.Red
}

const obj: B = {
  red: Color.Red,
}

// const 枚举
const enum Types {
  success,
  fail,
} // 直接编译成常量

console.log(Types.success) // 0

// 反向映射
enum Type {
  success,
  fail,
}

const success: number = Type.success // 0
const key:string = Type[success] // "success"
