// 协变 逆变 双向协变

// 协变 又称鸭子类型

// 主类型
interface A {
  name: string
  age: number
}

// zi类型
interface B {
  name: string
  age: number
  gender: string
}

let a: A = {
  name: 'Alice',
  age: 25,
}
const b: B = {
  name: 'Bob',
  age: 26,
  gender: 'male',
}

// 协变
a = b // 允许把B类型赋值给A类型，因为B类型是A类型的子类型，所以B类型可以赋值给A类型

// 感觉就是多态

// 逆变

function fna(param: A): void { }
function fnb(param: B): void { }

fnb = fna // 发生逆变

// 口诀 只能多不能少

// 双向协变一般不要开启