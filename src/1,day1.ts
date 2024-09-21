// any 任意类型 unknown 不知道的类型
// top type 顶级类型
// 2 object

// 注意Object和object的区别

// object是所有的对象类型 // 非原始类型

// function add(a: number = 1, b: number = 2): number {
//   return a + b
// }

// console.log(add()) // 3

// interface Obj {
//   user: number[]
//   add: (this: Obj, num: number) => void
// }

// const obj: Obj = {
//   user: [1, 2, 3],
//   add(this: Obj, num: number) {
//     this.user.push(num)
//   },
// }

// obj.add(4)

// console.log(obj)

// 函数重载

const user: number[] = [1, 2, 3]
/**
 * @returns {number[]} 查询所有user
 */
function findNum(): number[]
/**
 * @param id 要查询的id
 * @returns {number[]} 查询id对应的user
 */
function findNum(id: number): number[]
/**
 * @param add 要添加的user
 * @returns {number[]} 添加后的user
 */
function findNum(add: number[]): number[]
function findNum(ids?: number | number[]): number[] {
  if (typeof ids === 'number') {
    return user.filter(item => item === ids)
  }
  else if (Array.isArray(ids)) {
    user.push(...ids)
    return user
  }
  else {
    return user
  }
}

console.log(findNum(22))

