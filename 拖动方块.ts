const node = document.createElement("div");
node.style.border = "1px solid red";
node.style.height = "100px";
node.style.width = "100px";
node.id = "demo";
node.textContent = "可拖动div";

document.body.appendChild(node);

let canMove: boolean = false;
let position: [number, number] = [0, 0];

node.onmousedown = (e: MouseEvent) => {
  canMove = true;
  position = [e.clientX, e.clientY];
};

document.onmousemove = (e: MouseEvent) => {
  if (canMove === true) {
    let deltaX = e.clientX - position[0];
    let deltaY = e.clientY - position[1];
    let top = parseInt(node.style.top!) || 0;
    let left = parseInt(node.style.left!) || 0;
    node.style.top = top + deltaY + "px";
    node.style.left = left + deltaX + "px";
    position = [e.clientX, e.clientY];
  }
};

document.onmouseup = (e: MouseEvent) => {
  canMove = false;
};
