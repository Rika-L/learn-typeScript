// 类型守卫

// 1类型收窄
// typeof 是有缺陷的，数组 对象 函数 null都可以typeof为'object'
const isString = (str: any) => typeof str === 'string'

const isArr = (arr: any) => Array.isArray(arr)

// 类型谓词 | 自定义类型守卫

// 只能接收布尔值
// 语法规则 参数 is 参数类型

// 实现一个函数，该函数可以传入任何属性
// 但是如果是object 就检查里面的属性 如果里面的属性是number 就取两位
// 如果是string 就去除左右空格
// 如果是函数就执行

function isObj(obj: any) {
  // return Object.prototype.toString.call(obj) === '[object Object]'
  // 等价于
  return ({}).toString.call(obj) === '[object Object]'
}
const isNum = (num: any): num is number => typeof num === 'number'
const isFunc = (func: any): func is Function => typeof func === 'function'
const isStr = (str: any): str is string => typeof str === 'string'

function fn(data: any) {
  if (isObj(data)) {
    let val
    // 遍历属性不能用for in 因为for in 会遍历原型链上的属性
    Object.keys(data).forEach((key) => {
      val = data[key]
      if (isNum(val)) {
        data[key] = val.toFixed(2)
      }
      if (isStr(val)) {
        data[key] = val.trim()
      }
      if (isFunc(val)) {
        data[key]()
      }
    })
  }
}

const obj = {
  name: '  jack  ',
  age: 18,
  say() {
    console.log(this)
    return this
  },
}

fn(obj)
