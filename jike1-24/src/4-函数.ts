// 函数定义
function add3(x: number, y: number) {
  return x + y
}

let add4: (x: number, y: number) => number

type add5 = (x: number, y: number) => number

interface add6 {
  (x: number, y: number): number
}

// 可选参数
// 可选参数必须位于必选参数后
function add5(x: number, y?: number) {
  return y ? x + y : x
}
add5(1)

// 默认参数
function add6(x: number, y = 0, z: number, q = 1) {
  console.log(x + y + z + q)
}
add6(6, undefined, 3)

// 剩余参数
function add7(x: number, ...rest: number[]) {
  console.log(x + rest.reduce((pre, cur) => pre + cur))
}
add7(1, 2, 3, 4, 5, 6)

// 函数重载
// 两个函数名称相同，参数类型和个数不同

function add8(...rest: number[]): number
function add8(...rest: string[]): string
function add8(...rest: any[]): any {
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join('')
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}

console.log(add8('dfa', 'nume', 'vc'))
console.log(add8(1, 3, 7, 88))
