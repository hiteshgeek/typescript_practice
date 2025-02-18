const rounded_number = Math.round(1.5);

console.log(rounded_number);

let user_name: string = "Hitesh";
let count: number = 10;

console.log(`name = ${user_name}, count = ${count}`);

// type inference

let amount = 123; //type number inferred from value assigned

// any type

let title: any = "Title";

title = 345;

// imlicit any
let user;
