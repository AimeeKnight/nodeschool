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
/*
var mymodule = require("./mymodule");

mymodule(process.argv[2], process.argv[3], function(err, list){
  if (err){
    return console.log(err)
  }

  for (var i = 0; i < list.length; i++){
    console.log(list[i]);
  }

});
*/

// 7
/*
var http = require('http');

http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  response.on("data", function(data){
    console.log(data);
  });
});
*/

// 8
/*
var http = require("http");
var concatStream = require("concat-stream");

http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  response.pipe(concatStream(function(data){
    console.log(data.length);
    console.log(data);
  }));
});
*/

// 9
/*
var http = require("http");
var concatStream = require("concat-stream");

http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  response.pipe(concatStream(function(data){
    console.log(data);

    http.get(process.argv[3], function(response){
      response.setEncoding('utf8');
      response.pipe(concatStream(function(data){
        console.log(data);

        http.get(process.argv[4], function(response){
          response.setEncoding('utf8');
          response.pipe(concatStream(function(data){
            console.log(data);
          }));
        });
      }));
    });
  }));
});
*/

// 10

var net = require("net");
var strftime = require("strftime");

var server = net.createServer(function(socket){
  var current = new Date();
  var year = current.getFullYear();
  var month = current.getMonth();
  var day = current.getDate();
  var hour = current.getHours();
  var minute = current.getMinutes();

  socket.write(strftime('%F %R', new Date()) + "\n");
  socket.end();
});
server.listen(process.argv[2]);


// 11


