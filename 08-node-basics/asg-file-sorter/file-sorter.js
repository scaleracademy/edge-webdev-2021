/**
 * Create a program that does the following -
 *  1. Read files 1.txt, 2.txt, 3.txt and all the numbers inside them
 *  2. Sort the numbers in ascending order
 *  3. Write the sorted numbers to a file called sorted.txt
 */

const fs = require("fs");
let sortedData = [];
const data1 = fs.readFileSync("1.txt", "utf8").split("\n");

const data2 = fs.readFileSync("2.txt", "utf8").split("\n");

const data3 = fs.readFileSync("3.txt", "utf8").split("\n");

for (i in data1) sortedData.push(data1[i]);
for (i in data2) sortedData.push(data2[i]);
for (i in data3) sortedData.push(data3[i]);

sortedData.sort((a, b) => {
  return a - b;
});

var newData = "";
for (i = 0; i < sortedData.length; i++) newData += sortedData[i];

fs.writeFileSync("./sorted-example.txt", newData, (err) => {
  if (err) throw err;
  console.log("sorted data saved");
});
