let fs = require('fs');

fs.writeFile('callback.txt','this shoukd be written to the file',(err)=>{
    console.log('File is written');
});
console.log('Hello');