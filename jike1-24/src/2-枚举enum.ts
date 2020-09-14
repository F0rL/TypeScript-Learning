// 枚举类型
// 使用枚举我们可以定义一些带名字的常量。
// 使用枚举可以清晰地表达意图或创建一组有区别的用例。

// 数字枚举
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter) // 1
console.log(Role.Maintainer) // 3
console.log(Role)
/**
{
  1: "Reporter"
  2: "Developer"
  3: "Maintainer"
  4: "Owner"
  5: "Guest"
  Developer: 2
  Guest: 5
  Maintainer: 3
  Owner: 4
  Reporter: 1
}
 */

// 字符串枚举
enum Message {
  Success = '成功了',
  Fail = '失败了'
}
console.log(Message)
/**
{
  Fail: "失败了"
  Success: "成功了"
}
 */

// 枚举成员
enum Char {
  // const 常量编译时替换
  a,
  b = Char.a,
  c = 1 + 3,
  // computed 需要被计算，保留到执行阶段
  d = Math.random(),
  e = '123'.length
}

// 常量枚举
// 编译时替换
// @babel/plugin-transform-typescript does not support const enums because those require type information to compile.
// 来源 https://babeljs.io/docs/en/babel-plugin-transform-typescript
// const enum Month {
//   Jan = 1,
//   Feb = Month.Jan * 2,
//   Mar = 5
// }

// 枚举类型
enum E {
  a,
  b
}
enum F {
  a = 0,
  b = 1
}
enum G {
  a = 'apple',
  b = 'banana'
}

let e: E = 3
let f: F = 3
// e === f
// 不同类型的枚举不能比较

let e1: E.a = 1
let e2: E.b
// e1 e2不能比较
// console.log(e1 === e2)
let e3: E.a = 1
console.log(e1 === e3)

// 字符串枚举，只能是枚举成员的类型
let g1: G = G.b
// g2只能是自身
let g2: G.a = G.a
