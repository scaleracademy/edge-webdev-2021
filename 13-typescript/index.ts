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


// GENERICS IN TYPESCRIPT
type numArray = Array<number>;
type numnumArray = Array<numArray>;
// Angle brackets contain the generic part

// Generics in functions
// function getArray(items: any[]): any[] {
//   return new Array().concat(items)
// }

const lastElement = <T>(arr: Array<T>) => {
  return arr[arr.length - 1]
}

const l1 = lastElement([1,2,3]);
const l2 = lastElement(['a','b','c']);
const l3 = lastElement([1,'a',3]);

const makeArray = <X = boolean, Y = string>(x: X, y: Y) => {
  return [x, y];
}

const a1 = makeArray(5,6);
const a2 = makeArray(5,'b');
const a3 = makeArray<string | null>(null, '5'); // You can add unions while calling a function with generic type

// Extension in generics -> Interfaces

// const makeFullName = (obj: {
//   firstName: string;
//   lastName: string;
// }) => {
//   return {
//     ...obj,
//     fullName: obj.firstName + " " + obj.lastName
//   }
// }

// const f1 = makeFullName({
//   firstName: "something",
//   lastName: "sinclair",
//   age: 25
// })

// We need to ensure that two fields exist for sure but other fields can also exist

interface basics {
  firstName: string;
  lastName: string;
};

const makeFullName = <T extends {
  firstName: string;
  lastName: string;
}>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName
  }
}

const f1 = makeFullName({
  firstName: "something",
  lastName: "sinclair",
  age: 25,
  random: true
})

// Generics with Interfaces
interface Tablet<T> {
  id: string;
  position: number;
  data: T
}

type numberTablet = Tablet<number>;

let something: numberTablet;

// Debatable feature of interfaces
interface Person {
  name: string;
  hungry: boolean;
}

interface Person {
  hangry: boolean
}

// Interface declaration merging in TS

type personType = Person;
let me: personType;