// 接口
interface List {
  readonly id: number
  name: string
  // 可选属性
  age?: number
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name)
    // value.age && console.log(value.age)
    console.log(value?.age)
    // 只读属性不能更改
    // value.id++
  })
}

// 允许多余的字段
let result = {
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 1, name: 'B', age: 22 }
  ]
}
// 如果直接传入对象则会进行检查是否有多余字段
render(result)

// 可索引类型接口
interface StringArray {
  [index: number]: string
}
let chars: StringArray = ['A', 'B']

interface Names {
  [x: string]: string
  [z: number]: string
}

// 函数接口
// 使用类型定义
let add1: (x: number, y: number) => number
// 用接口定义
interface Add1 {
  (x: number, y: number): number
}
// 使用类型别名
type Add2 = (x: number, y: number) => number
let add2: Add2 = (a, b) => a + b

// 混合类型接口
interface Lib {
  (): void
  version: string
  doSomething(): void
}

function getLib() {
  let lib: Lib = (() => {}) as Lib
  lib.version = '1.0'
  lib.doSomething = () => {}
  return lib
}
