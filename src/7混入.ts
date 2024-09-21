// mixins

// 对象混入

interface A {
  age: number
}

interface B {
  name: string
}

const a: A = {
  age: 18,
}

const b: B = {
  name: 'Tom',
}

// 1 拓展运算符 浅拷贝 返回新的类型
// const c = { ...a, ...b }

// 2 Object.assign() 浅拷贝 交叉类型
// const c = Object.assign({}, a, b)

// 深拷贝
// structuredClone(a)
console.log(c)

// 类的混入

// 插件类型的混入

class Logger {
  log(msg: string) {
    console.log(msg)
  }
}

class HTML {
  render() {
    console.log('HTML render')
  }
}

class App {
  run() {
    console.log('App run')
  }
}

type Constructor<T> = new (...args: any[]) => T
function pluginMinxins<T extends Constructor<App>>(Base: T) {
  return class extends Base {
    private logger = new Logger()
    private html = new HTML()
    constructor(...args: any[]) {
      super(...args)
      this.logger = new Logger()
    }
  }
}

// 有点没看懂，要是用到再回来看