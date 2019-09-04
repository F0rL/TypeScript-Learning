interface LabelValue {
  label: string;
  size: number;
}

function printLabel(labelObj: LabelValue) {
  console.log(labelObj.label);
}

let myObj = { size: 10, label: "size 10" };

printLabel(myObj);

//可选属性
interface Square {
  color: string;
  area: number;
}

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): Square {
  let newSquare = { color: "write", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  config.width && (newSquare.area = config.width * config.width);
  return newSquare;
}

let mySquare = createSquare({ corlor: "red", width: 200 });

console.log(mySquare);

//只读属性
interface Paint {
  readonly x: number;
  readonly y: number;
}

let p1: Paint = { x: 10, y: 20 };
p1.x = 5; //错误
