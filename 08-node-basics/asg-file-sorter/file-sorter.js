/**
 * Create a program that does the following -
 *  1. Read files 1.txt, 2.txt, 3.txt and all the numbers inside them
 *  2. Sort the numbers in ascending order
 *  3. Write the sorted numbers to a file called sorted.txt
 */
const fs = require("fs");
const ar = [];

//this function reads data from a file with name=filename and pushes integers in array ar[]
const yess = (filename) => {
  const data = fs.readFileSync(filename, "utf-8");
  const arr = data.toString().replace(/\r\n/g, "\n").split("\n");

  for (let i of arr) {
    ar.push(Number(i));
  }
};

//calling yess for 3 files
yess("1.txt");
yess("2.txt");
yess("3.txt");

//sorting array
ar.sort((a, b) => a - b);

//now writing sroted array to a file sorted.txt
const stream = fs.createWriteStream("./sorted.txt");
for (let i = 0; i < ar.length; i++) {
  stream.write(ar[i] + "\n");
}
