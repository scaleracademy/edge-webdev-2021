/**
 * Create a program that does the following - 
 *  1. Read files 1.txt, 2.txt, 3.txt and all the numbers inside them 
 *  2. Sort the numbers in ascending order
 *  3. Write the sorted numbers to a file called sorted.txt
 */
const fs = require("fs")

let arr = []; 

//Reads all the files under current directory 
fs.readdir(__dirname , (err,files)=>{
    if(err){
        console.log("hey");
        console.log(err);
    }
    else{
        files.forEach(file => {
            if(file != "file-sorter.js") { 
                //reads the content and adds into array 
                fs.readFile(file,'utf-8',(err,data)=>{
                    if(err)console.log(err);
                    else{
                       let str = "" ; 
                       for(let i = 0 ; i < data.length ; i++){
                           if(data[i] == "\r"){
                               if(str.length != "")
                                arr.push(parseInt(str)); 
                               str = "" ; 
                           }
                           else if(data[i] == "\n") continue ; 
                           else{
                               str += data[i] ; 
                               if(i == data.length-1)arr.push(parseInt(str));
                           }
                       }
                    }
                })
            }
        })
    }
})


let wait = setInterval(endFun,2000);
function endFun(){
    if(arr.length > 0){
        clearInterval(wait);
    }
    arr.sort((a,b)=>{return a-b})
    console.log(arr);
    let str = "" ; 
    for(let i = 0 ; i < arr.length ; i++){
        str = str + arr[i].toString() + "\n" ; 
    }
    // console.log(str);
    fs.writeFile('sorted.txt',str,(err)=>{
       if(err) console.log(err);
    });
}
