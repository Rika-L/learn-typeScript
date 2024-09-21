// 目标：class 实现一个mini版的Vue

interface Options {
  el: string
}

interface VueCls {
  options: Options
  init: () => void
}

// vNode
interface vNode {
  tag: string
  text?: string
  children?: vNode[]
}

class Dom {
  constructor() {}
  createElement(tag: string): HTMLElement {
    return document.createElement(tag)
  }

  setText(el: HTMLElement, text: string) {
    el.textContent = text
  }

  render(vnode: vNode) {
    const el = this.createElement(vnode.tag)
    if (vnode.children && Array.isArray(vnode.children)) {
      vnode.children.forEach((item) => {
        const child = this.render(item)
        this.setText(child, item.text ?? '')
        el.appendChild(child)
      })
    }
    else {
      this.setText(el, vnode.text ?? '')
    }
    return el
  }
}

class Vue extends Dom implements VueCls {
  options: Options
  constructor(options: Options) {
    super()
    this.options = options
  }

  init() {
    const app = document.querySelector(this.options.el)
    const vNode = {
      tag: 'div',
      children: [
        {
          tag: 'h1',
          text: 'Hello Vue',
        },
        {
          tag: 'p',
          text: 'This is a Vue component',
        },
      ],
    }
    app?.appendChild(this.render(vNode))
    document.body.appendChild(app as Element)
  }
}

const app = new Vue({ el: '#app' })
app.init()
