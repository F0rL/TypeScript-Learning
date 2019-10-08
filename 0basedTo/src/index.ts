let num: number = 123;

let content: string | number;

let tuple: [string, number];
tuple = ["da", 123];

enum Status {
  Uploading = 100,
  Success = 200,
  Failed = 404
}

console.log("enum", Status.Uploading, Status["Success"], Status.Failed);
console.log("reverseEnum", Status[100]);

let value1: any;

//Symbol
let key = Symbol("value");
let key2 = Symbol.for("value");
let key3 = Symbol.for("value");
let key1 = Symbol.keyFor(key2);

console.log(key1, key === key2, key2 === key3);

const errorFunc = (message: string): never => {
  throw new Error(message);
};

//断言
const getLength = (target: number | string): number => {
  if ((target as string).length) {
    return (target as string).length;
  } else {
    return target.toString().length;
  }
};

//接口
interface Info {
  firstName: string;
  lastName: string;
}

const getFullName = ({ firstName, lastName }: Info): string =>
  `${firstName} ${lastName}`;
console.log(getFullName({ firstName: "kuma", lastName: "forl" }));

//索引签名
interface Vegetables {
  color?: string;
  type: string;
  [prop: string]: any;
}

const getVegetables = ({ type, color }: Vegetables) => {
  return `${color ? color + "" : ""} ${type}`;
};

getVegetables({
  color: "red",
  type: "tomato",
  size: 12,
  price: 30
});

//混合接口
interface Counter {
  (): void;
  count: number;
}
const getCount = (): Counter => {
  const c = () => {
    c.count++;
  };
  c.count = 0;
  return c;
};
const counter: Counter = getCount();
counter();
console.log("counter", counter.count);

// 函数可选参数
type Add = (x: number, y: number, z?: number) => number;
let add: Add = (arg1, arg2) => arg1 + arg2;
add(333, 123, 444);

// 剩余参数
const handleData = (arg1: number, ...args: string[]) => {
  return [...args, arg1];
};
console.log("handleData", handleData(1, "dfa"));

// 函数重载
function handleArg(x: string): string[];
function handleArg(x: number): string;
function handleArg(x: any): any {
  if (typeof x === "string") {
    return x.split("");
  } else {
    return x
      .toString()
      .split("")
      .join("-");
  }
}
console.log(handleArg("acvxdf"), handleArg(123435));

//泛型
//泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
const getArray = <T>(value: T, times = 5): T[] => {
  return new Array(times).fill(value);
};
getArray([1], 3).forEach(item => {
  console.log(item.length);
});

const getNewArray = <T, U>(value1: T, value2: U, times = 6): [T, U][] => {
  return new Array(times).fill([value1, value2]);
};
getNewArray(1, "aa", 3).forEach(item => {
  console.log(item[0].toFixed);
  console.log(item[1].length);
});

//泛型约束参数
const getPorp = <T, K extends keyof T>(object: T, propName: K) => {
  return object[propName];
};
const obj = { a: 1, b: 2 };
getPorp(obj, "a");

//类
class Point {
  public x: number;
  private y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  public getPosition() {
    return `${this.x}, ${this.y}`;
  }
}
const p = new Point(12, 32);
console.log("class", p.getPosition(), p);

class A {
  constructor(name: string) {}
}
const a = new A("aaa");
// console.log(a.name); error
class B {
  constructor(public name: string) {}
}
const b = new B("bbb");
console.log("class b", b.name);

//函数参数个数
let x = (a: number) => 0
let y = (b: number, c: number) => 0
y = x

const h1 = document.createElement("h1");
h1.innerHTML = "hello world";
document.body.appendChild(h1);
