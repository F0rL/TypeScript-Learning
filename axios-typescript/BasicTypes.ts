//Boolean
let isDone: boolean = false;

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String
let color: string = "blue";

//Array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let list3: object[] = [1, 3, { x: 1 }]; // wrong

//Tuple
let x: [string, number];
x = ["hello", 1];
x = [1, "kuma"]; // wrong

//Enum
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;

//Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

//Void
//void类型像是与any类型相反，它表示没有任何类型，当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser(): void {
  console.log("This is my warning message");
}

//Null 和 Undefined
//TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

//Never
// never类型表示的是那些永不存在的值的类型。
//例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

//Object
//object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
// 使用object类型，就可以更好的表示像Object.create这样的API。
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error

//类型断言
//有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

//两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；
// 然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。


