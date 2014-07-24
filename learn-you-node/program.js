// 1
// console.log("HELLO WORLD");

// 2
/*
var numbers = process.argv;
var sum = 0;

for (var i = 2; i < numbers.length; i++){
  sum += numbers[i] * 1;
}
console.log(sum)
*/

// 3
/*
var fs = require('fs');

var fileContents = fs.readFileSync(process.argv[2])
fileContents = fileContents.toString().split("\n");
var fileLength = fileContents.length - 1;
console.log(fileLength);
*/

// 4
/*
var fs = require('fs');

fs.readFile(process.argv[2], function(err, data){
  var fileContents = data.toString().split("\n");

  var fileLength = fileContents.length - 1;
  console.log(fileLength);
});
*/

// 5
/*
var fs = require('fs');
fs.readdir(process.argv[2], function(err, list){
  for (var i = 0; i < list.length; i++){
    if (list[i].indexOf("." + process.argv[3]) != -1){
      console.log(list[i]);
    }
  }
});
*/

// 6
var mymodule = require("./mymodule");

mymodule(process.argv[2], process.argv[3], function(err, list){
  if (err){
    return console.log(err)
  }

  for (var i = 0; i < list.length; i++){
    console.log(list[i]);
  }

});

