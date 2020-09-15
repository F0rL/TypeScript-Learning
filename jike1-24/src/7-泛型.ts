// 泛型
// 函数或者类支持多种数据类型
// 不预先确定数据类型，具体的类型在使用时确定
function log<T>(value: T): T {
  console.log(value)
  return value
}
// 两种方法调用
log<string[]>(['a', 'b'])
log(['c', 'd'])

// 定义函数类型
type Log = <T>(value: T) => T
let myLog: Log = log

// 泛型接口
interface Log1 {
  <T>(value: T): T
}

// 约束所有
interface Log2<T> {
  (value: T): T
}
let myLog1: Log2<number> = log

// 默认类型
interface Log3<T = string> {
  (value: T): T
}
let myLog2: Log3 = log

// 泛型类
// 不能应用于静态成员
class Log4<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}
let log4 = new Log4<number>()
log4.run(1)
let log5 = new Log4()
log5.run('1')

interface Length {
  length: number
}
function log6<T extends Length>(value: T): T {
  console.log(value, value.length)
  return value
}
log6([1])
// 需要有length属性
// log6(21)

// 函数和类可以轻松支持多种类型，增强程序的扩展性
// 不必写多条函数重载，冗长的联合类型声明，增强代码的可读性
// 灵活控制类型之间的约束