/**
 * Create a program that does the following - 
 *  1. Read files 1.txt, 2.txt, 3.txt and all the numbers inside them 
 *  2. Sort the numbers in ascending order
 *  3. Write the sorted numbers to a file called sorted.txt
 */

const fs = require("fs");

const d1 = fs.readFileSync("1.txt", "utf8").split("\n");
const d2 = fs.readFileSync("2.txt", "utf8").split("\n");
const d3 = fs.readFileSync("3.txt", "utf8").split("\n");

let sortedNums = [];

for (let i in d1) {
  sortedNums.push(parseInt(d1[i]));
}
for (let i in d2) {
  sortedNums.push(parseInt(d2[i]));
}
for (let i in d3) {
  sortedNums.push(parseInt(d3[i]));
}

sortedNums.sort((a, b) => {
  return a - b;
});

fs.writeFileSync("sorted.txt", sortedNums.join("\n"));
