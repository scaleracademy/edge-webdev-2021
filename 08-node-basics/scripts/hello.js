// console.log("hello world")
// console.log(Math.max(123,457,6584,23))
// console.log(process.argv)

if (process.argv.length < 3) {
    console.log("Hello Guest")
} else {
    console.log("Hello " + process.argv[2])
}