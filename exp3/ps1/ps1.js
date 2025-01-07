const fs = require('fs');

let filePath = 'sample.txt';


function readFile() {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(data){
            console.log(data);
        }
        if(err){
            console.log(err);
        }
    });
}
readFile();


function writeFile() {
    let content = "console.log(This is content after writing file)"
    fs.writeFile(filePath, content, (err) => {
        if(err){
            console.log(err);
        }
        else {
            console.log("file written successfully");
        }
    });
}
writeFile();

function appendFile() {
    let content = "This is content after appending to the file";
    fs.appendFile(filePath, content, (err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("file content appended successfully");
        }
    });
}
appendFile();

function deleteFile() {
    fs.unlink(filePath, (err) => {
        if(err){
            console.log(err);
        }
        else {
            console.log("file deleted successfully");
        }
    })
}
deleteFile();