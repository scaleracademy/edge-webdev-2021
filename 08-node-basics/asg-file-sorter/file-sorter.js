/**
 * Create a program that does the following - 
 *  1. Read files 1.txt, 2.txt, 3.txt and all the numbers inside them 
 *  2. Sort the numbers in ascending order
 *  3. Write the sorted numbers to a file called sorted.txt
 */

const fs = require('fs');


all_data_from_files = [];


const number_of_files = 3;                                                        //Number of text files.
function compareNumbers(a, b) {
    return a - b;
}
function to_add_values(array, flag) {                                             //Function to add values to all_data_from_files array.
    for (var i = 0; i < array.length; ++i) {
        all_data_from_files.push(array[i]);
    }
    if (flag === true) {
        to_sort_and_add();
    }
}
function to_read(number) {                                                       //Function to read data from files
    for (let i = 1; i <= number_of_files; ++i) {
        fs.readFile(`${i}.txt`, (err, data) => {
            if (err) {
                throw err;
            }
            else {
                console.log(`Successfully read ${i}.txt and added values from it to all_data_from_files array!`);
                if (i === number_of_files) {
                    to_add_values(data.toString().split('\n'), false);
                }
                else {
                    to_add_values(data.toString().split('\n'), true);
                }

            }
        })
    }
}
function to_sort_and_add() {                                                      //Function to sort the final array and add values to sorted.txt file
    all_data_from_files.sort(compareNumbers)
    fs.writeFile(`sorted.txt`, all_data_from_files.toString(), (err) => {
        if (err) {
            throw err;
        }
        else {
            console.log(`File Saved!`);
        }
    });

}

to_read(number_of_files);

