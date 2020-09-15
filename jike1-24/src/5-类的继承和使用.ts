class Dog {
  constructor(name: string) {
    // 与es不同的是，实例的属性必须有初始值或者在构造函数中初始化
    this.name = name
  }
  // 类的成员修饰符
  public name: string
  run() {}
  // 私有，只能在类的本身调用
  private pri() {}
  // 只能在类和子类中访问，不能在类的实例中访问
  protected pro() {}
  // 只读，不能更改，设置初始值
  readonly legs: number = 4
  // 静态成员，只能通过类名来调用，可以被继承
  static food: string = 'bones'
}
// name只在实例上，不在原型上
console.log(Dog.prototype)
let dog = new Dog('wangcai')
console.log(dog)
// dog.pri()
// dog.pro()
console.log(Dog.food)

// 类的继承
class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name)
    this.color = color
  }
  // 构造函数的参数添加修饰符
  // 声明为实例属性克省略最下方的color: string
  // constructor(name: string, public color: string) {
  //   super(name)
  //   this.color = color
  // }
  color: string
}
console.log(Husky.food)

// 抽象类
// 只能被继承，不能被实例化
abstract class Animal {
  eat() {
    console.log('eat')
  }
  // 抽象方法，明确知道子类可以有其它的实现
  abstract sleep(): void
}

class Dog1 extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  sleep() {
    console.log('dog sleep')
  }
}
let dog1 = new Dog1('wangcai')
dog1.eat()
dog1.sleep()

// 多态
// 对不同的对象实行不同的操作
class Cat extends Animal {
  sleep() {
    console.log('cat sleep')
  }
}
let cat = new Cat()

let animals: Animal[] = [dog1, cat]

animals.forEach(i => {
  console.log('多态')
  i.sleep()
})

// this
// 链式调用
console.log('链式调用')
class WorkFlow {
  step1() {
    console.log('work step1')
    return this
  }
  step2() {
    console.log('work step2')
    return this
  }
}
new WorkFlow().step1().step2()

// 也可以调用子类方法
class MyFlow extends WorkFlow {
  next() {
    console.log('mywork nextss')
    return this
  }
}
new MyFlow().next().step1().next().step2()