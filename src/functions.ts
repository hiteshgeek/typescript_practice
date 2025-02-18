function sum(num1: number, num2: number) {
  let sum = num1 + num2;
  console.log(`Sum = ${sum}`);
}

sum(1, 2);

function square(num: number): number {
  return num * num;
}

console.log(`Square of 5 = ${square(5)}`);

const colors = ["red", "green", "blue"];

const new_colors = colors.map((color) => `Color : ${color}`);

console.log(colors, new_colors);
