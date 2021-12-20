const fs = require("fs/promises");

let array = [];
/* const readIt = () => {
  for (let j = 1; j <= 3; j++) {
    fs.readFileSync(`${j}.txt`, (err, data) => {
      arr = data.toString().split("\n");
      for (let i = 0; i < arr.length; i++) {
        array.push(Number(arr[i]));
        // console.log(Number(arr[i]));
      }
    });
  }
};
readIt(); */
// import fs from "fs/promises";
const sortNumber = (a, b) => {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
};

const readIt = async () => {
  let file1 = await fs.readFile("1.txt");
  let file2 = await fs.readFile("2.txt");
  let file3 = await fs.readFile("3.txt");
  file1 = file1.toString().split("\n");
  file2 = file2.toString().split("\n");
  file3 = file3.toString().split("\n");
  // console.log("1: ", file1, "\n 2: ", file2, "\n 3: ", file3);
  for (let i = 0; i < file1.length; i++) {
    array.push(Number(file1[i]));
  }
  for (let i = 0; i < file2.length; i++) {
    array.push(Number(file2[i]));
  }
  for (let i = 0; i < file3.length; i++) {
    array.push(Number(file3[i]));
  }
  // array = [...file1, ...file2, ...file3];
  array.sort(sortNumber);
  let ans = "";
  for (let i = 0; i < array.length; i++) {
    ans += array[i].toString() + "\n";
  }

  fs.writeFile("solution.txt", ans, (err) => {
    if (err) throw err;
    else {
      console.log("File saved! ");
    }
  });
};
readIt();
