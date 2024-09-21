// set map weakSet WeakMap 跳过了

// // proxy
// const person = {
//   name: 'John',
//   age: 30,
// }

// // 只能接收引用类型
// // 数据劫持
// const personProxy = new Proxy(person, {
//   // 取值
//   get() {

//   },
//   // 赋值
//   set(target, key, value, _receiver) {
//     return true
//   },
//   // 拦截函数调用
//   apply() {},
//   // 拦截in操作符
//   has() {
//     return true
//   },
//   // 拦截for...in循环
//   ownKeys() {},
//   // 拦截new操作符
//   construct() {},
//   // 拦截delete操作符
//   deleteProperty() {},
//   // ...一共有13个拦截方法
// })

const person = {
  name: 'John',
  age: 30,
}
const personProxy = new Proxy(person, {
  get(target, key, receiver) {
    if (target.age > 69) {
      return Reflect.get(target, key, receiver)
    }
    else {
      return 'age is too small'
    }
  },
})

console.log(personProxy.name) // John
