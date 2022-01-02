import fs from "fs/promises";

const sortNumber = (a, b) => {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
};

try {
  const data1 = await fs.readFile("1.txt");
  const data2 = await fs.readFile("2.txt");
  const data3 = await fs.readFile("3.txt");

  let newlineBuffer = Buffer.from("\n"); //adding newline at end of file
  let bufferConcat = Buffer.concat([
    //combining all buffers to one
    data1,
    newlineBuffer,
    data2,
    newlineBuffer,
    data3,
  ]);

  let stringBuffer = bufferConcat.toString();
  let stringArray = stringBuffer.split("\n"); //splitting into substrings when newline detected
  let integerArray = stringArray.map((string) => parseInt(string)); //parsing each substring to integer
  integerArray.sort(sortNumber);
  integerArray = integerArray.join("\n"); //adding newline to each element
  await fs.writeFile("sorted.txt", integerArray.toString());
  console.log(integerArray);
} catch (err) {
  console.log(err);
}
