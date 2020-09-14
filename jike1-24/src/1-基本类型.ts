// 基本类型
// 类型注解

// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'string'

// 数组
// 两种方式
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, 'string']

// 元祖
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
let tuple: [number, string] = [0, '1']

// 函数
let add = (x: number, y: number) => x + y
// 定义一个函数类型，没有实现
let compute: (x: number, y: number) => number
// 定义函数实现，参数可以不一样
compute = (a, b) => a + b

// 对象
let obj: { x: number; y: string } = { x: 1, y: 'string' }

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)

// undefined,null
// 声明为undefined,null则不能被赋值为其它数据类型
// undefined,null是任何类型的子类型
// 设置tsconfig.json "strictNullChecks": false,则允许其它类型赋值为null
// 也可使用联合类型
let un: undefined = undefined
let nu: null = null
let num1: number | null | undefined = 123
num1 = null

// void
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。
// 当一个函数没有返回值时，你通常会见到其返回值类型是 void
let noReturn = () => {}

function warnUser(): void {
  console.log("This is my warning message");
}

// any
// 不建议使用
let x
x = 1
x = []

// never
// 表示的是那些永不返回的值的类型
// 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while(true) {}
}