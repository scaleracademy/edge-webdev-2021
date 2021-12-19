/**
 * Create a program that does the following - 
 *  1. Read files 1.txt, 2.txt, 3.txt and all the numbers inside them 
 *  2. Sort the numbers in ascending order
 *  3. Write the sorted numbers to a file called sorted.txt
 */
 const fs = require('fs');

numbers=[];

function compareNumbers(a, b) {
    return a - b;
  }

  function writToFile(){
    fs.writeFile('sorted-example.txt', numbers.toString(), (err) => {
        if (err) throw err;
        else console.log('File saved!');
    })
}

function addToList(arr){
    for (var i = 0; i < arr.length; i++) {
        numbers.push(arr[i]);
      }
    numbers.sort(compareNumbers);
    console.log(numbers);
    writToFile();
}


  

fs.readFile('1.txt', (err, data) => {
    if (err) throw err; 
    console.log("file 1");
    console.log(data.toString().split("\r\n"));
    numbers1=data.toString().split("\r\n");
    numbers1=numbers1.map(Number);
    numbers1.sort(compareNumbers);
    addToList(numbers1);
})

fs.readFile('2.txt', (err, data) => {
    if (err) throw err; 
    console.log("file 2");
    console.log(data.toString().split("\r\n"));
    numbers2=data.toString().split("\r\n");
    numbers2=numbers2.map(Number);
    numbers2.sort(compareNumbers);
    addToList(numbers2);
})

fs.readFile('3.txt', (err, data) => {
    if (err) throw err; 
    console.log("file 3");
    console.log(data.toString().split("\r\n"));
    numbers3=data.toString().split("\r\n");
    numbers3=numbers3.map(Number);
    numbers3.sort(compareNumbers);
    addToList(numbers3);
})