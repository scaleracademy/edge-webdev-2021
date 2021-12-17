/**
 * Create a program that does the following - 
 *  1. Read files 1.txt, 2.txt, 3.txt and all the numbers inside them 
 *  2. Sort the numbers in ascending order
 *  3. Write the sorted numbers to a file called sorted.txt
 */
// reading data
const fs = require('fs');

const data1 = fs.readFileSync('1.txt', 'utf8').split('\n');
const data2 = fs.readFileSync('2.txt', 'utf8').split('\n');
const data3 = fs.readFileSync('3.txt', 'utf8').split('\n');

// data1.sort((a,b)=>{return a-b});
// console.log(data1);

// combining data
let data = [];

for(i in data1) {
  data.push(data1[i]);
}
for(i in data2) {
  data.push(data2[i]);
}
for(i in data3) {
  data.push(data3[i]);
}

// sorting data
data.sort((a,b)=>{return a-b});
let sortedData = "";
for(i = 0; i < data.length; i++) {
  sortedData+=data[i];
  if(i < data.length-1) sortedData+='\n';
}

// writing on file
fs.writeFileSync('./sorted.txt', sortedData, (err)=>{
  if(err) throw err;
  console.log("sorted data saved")
});
