let obj1 = {
  a: 1,
  b: 2,
  c: 3
}
// function getValue(obj: any, keys: string[]) {
//   return keys.map(key => obj[key])
// }
// 实现对对象的约束
function getValue<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}
console.log(getValue(obj1, ['a', 'b']))
// 这里 d 会报错
// console.log(getValue(obj1, ['c', 'd']))

// keyof
interface Obj {
  a: number
  b: number
}
let key: keyof Obj

// T[k]
let value: Obj['a']

// T extends 

