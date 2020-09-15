interface Human {
  name: string
  eat(): void
}
// 接口只能约束公有成员
class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  eat() {}
}

// 接口的继承
interface Man extends Human {
  run(): void
}
interface Child {
  cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {},
}

// 接口继承类
// 接口只能约束公有成员
class Auto {
  state = 1
}
interface AutoInterface extends Auto {

}

class C implements AutoInterface {
  state = 1
}

class Bus extends Auto  implements AutoInterface {

}