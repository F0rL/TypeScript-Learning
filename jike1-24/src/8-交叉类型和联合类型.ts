// 接口的交叉类型
interface DogInterface {
  run(): void
}
interface CatInterface {
  jump(): void
}

// pet 具有两个的所有方法
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {}
}

// 对象的联合类型
class Dog2 implements DogInterface {
  run() {}
  eat() {}
}

class Cat2 implements CatInterface {
  run() {}
  jump() {}
}
enum Master {
  Boy,
  Girl
}

function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog2() : new Cat2()
  // 如果不确定，只能访问公有类型
  pet.run()
  return pet
}

interface Square {
  kind: 'square'
  size: number
}

interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}

interface Circle {
  kind: 'circle'
  r: number
}

type Shape = Square | Rectangle | Circle
// function area(s: Shape): number {
function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size ** 2
    case 'rectangle':
      return s.width * s.height
    case 'circle':
      return Math.PI * s.r ** 2
    default:
      return ((e: never) => {
        throw new Error(e)
      })(s)
  }
}
console.log(area({ kind: 'circle', r: 2 }))
