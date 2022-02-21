/**
 * Create a program that does the following - 
 *  1. Read files 1.txt, 2.txt, 3.txt and all the numbers inside them 
 *  2. Sort the numbers in ascending order
 *  3. Write the sorted numbers to a file called sorted.txt
 */

 function compareFunction(a, b){
    return a - b;
}

const fs = require('fs');
const array1 = fs.readFileSync('1.txt').toString().split("\n");
const array2 = fs.readFileSync('2.txt').toString().split("\n");
const array3 = fs.readFileSync('3.txt').toString().split("\n");

const finalArray = [...array1, ...array2, ...array3];

finalArray.sort(compareFunction);

fs.writeFile('sorted.txt', finalArray.join("\n"), (err) => {
    if(err){
        throw err;
    }
    else{
        console.log('Sorted file saved !');
    }
});