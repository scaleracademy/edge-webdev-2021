/**
 * Create a program that does the following - 
 *  1. Read files 1.txt, 2.txt, 3.txt and all the numbers inside them 
 *  2. Sort the numbers in ascending order
 *  3. Write the sorted numbers to a file called sorted.txt
 */



const fs = require("fs");
const { type } = require("os");

// const arr = [1, 2, 3, 4];
// var arr1 = "1,2,3,4,5";
// fs.writeFile("1.txt", arr1, (err) => {
//   if (err) throw err;
//   else {
//     console.log("File Saved");
//   }
// });

const finalArrayList = [];
const data1 = fs.readFileSync("1.txt", "utf8").split("\n"); // get data from files in string encoded in utf8
const data2 = fs.readFileSync("1.txt", "utf8").split("\n");
const data3 = fs.readFileSync("1.txt", "utf8").split("\n");

// parseInt from string to number and store in finalArrayList of all the three files content
for (i in data1) {
  var num = parseInt(data1[i]);
  finalArrayList.push(num);
}
for (i in data2) {
  var num = parseInt(data1[i]);
  finalArrayList.push(num);
}
for (i in data3) {
  var num = parseInt(data1[i]);
  finalArrayList.push(num);
}

// sort the integer Array
finalArrayList.sort((a, b) => a - b);

var contentToadd = "";

// store the integer array in string by adding the "\n" in each line

for (i in finalArrayList) {
  // console.log(finalArrayList[i]);
  contentToadd += finalArrayList[i];
  contentToadd += "\n";
}
console.log(contentToadd);

// write the string contetToAdd in sorted-data file

fs.writeFile("sorted-data.txt", contentToadd, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("File Saved!!");
  }
});
