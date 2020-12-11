// install fs
const fs = require('fs');
// assign an argument from the command line to data
let data = process.argv[2];

// early return if data missing
if(!data) return console.log('Please input name of file');
// normalize the data word
data = data.toLowerCase();

// read in data from command line
fs.readFile(`./${data}.json`, (err, data) => {
    if (err) return console.log('Invalid file name');
    let fruit = JSON.parse(data);
    fruit.forEach(element => {
        console.log(`${element.name} $${element.price}`)
    });
});
