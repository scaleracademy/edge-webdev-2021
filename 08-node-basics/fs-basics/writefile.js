const fs = require('fs');

fs.writeFile('abcd/data.txt', 'Hello World!', (err) => {
    if (err) throw err;
    else console.log('File saved!');
})

// mai kya kar raha hu ?