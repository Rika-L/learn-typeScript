// 抽象类
abstract class Vuee {
  name: string
  constructor(name?: string) {
    this.name = name!
  }

  getName() {
    return this.name
  }

  abstract init(name: string): void
}

class MyVue extends Vuee {
  constructor() {
    super()
  }

  init(name: string): void {
    this.name = name
  }
}
