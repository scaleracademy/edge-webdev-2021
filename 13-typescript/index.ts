// Strict Type Assignment
let abc: number = 23;
// abc = "something";

console.log(abc);

// Strict Typing Lists
let list1: number[] = [45,56,78];
// let list2: string[] = ["bipin", "is", "teaching", 5]
let list3: any[] = [45, true, "s"]

console.log(list1, list3);
// console.log(something)

// Custom Types
type style = number | string; // Union of two types
type decoration = "bold" | "italic";

let random: style = "random";
random = 24;
// random = true;

let font: decoration = "italic";

// let a: number = 24;
// console.log(a.toString());

// Custom Types for Objects
interface Car {
  year: number,
  model: string,
  electric: boolean,
  [key: string]: any // This would give me capability to add extra key value pairs to my object
}

let myCar: Car;
// myCar.something = true;
// myCar.something = "random";
// myCar.random = "random";

// Strong Typing a Function
function addtwo(x: number, y: number): string {
  return (x+y).toString();
}

console.log(addtwo(2,3))

// TypeScript has Tuples
// A tuple is a fixed length list with datatype of each element predefined
type myTuple = [number, string, boolean, number?]; // ? -> Makes an element optional
let newTuple: myTuple = [23, "b", true, 54]
// let newerTuple: myTuple = [];
