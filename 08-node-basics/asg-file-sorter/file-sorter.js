/**
 * Create a program that does the following - 
 *  1. Read files 1.txt, 2.txt, 3.txt and all the numbers inside them 
 *  2. Sort the numbers in ascending order
 *  3. Write the sorted numbers to a file called sorted.txt
 */
const fs = require('fs');
const readline = require('readline');

// stream don't have line event that's why use readline
const getFile = (fileName) =>{
    const file = readline.createInterface({
        input: fs.createReadStream(fileName),
        output: process.stdout,
        terminal: false
    })   
    // const file = fs.createReadStream(fileName);
    return file;
}

const file1 = getFile('1.txt');
const nums = [];
file1.on('line', (line)=>{
    nums.push(parseInt(line));
})

const file2 = getFile('2.txt');
file2.on('line', (line)=>{
    nums.push(parseInt(line));
})
// const file3 = fs.createReadStream('3.txt');
const file3 = getFile('3.txt');
file3.on('line', (line)=>{
    nums.push(parseInt(line));
})

file3.on('close', ()=>{
    nums.sort((a, b)=>{return a-b})
        // console.log(nums);
        fs.writeFile('sorted.txt', nums.join('\n'), (err)=>{
            if(err)console.log(err);
        })
})
