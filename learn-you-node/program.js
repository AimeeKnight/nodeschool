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
})
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
  //response.on("data", function(data){
    //console.log(data);
  //});
  response.on('data', console.log)
  response.on('error', console.error)
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
/*
var net = require("net");
var strftime = require("strftime");

var server = net.createServer(function(socket){
  var current = new Date();
  //var year = current.getFullYear();
  //var month = current.getMonth();
  //var day = current.getDate();
  //var hour = current.getHours();
  //var minute = current.getMinutes();

  socket.end(strftime('%F %R', new Date()) + "\n");
  //socket.write(strftime('%F %R', new Date()) + "\n");
  //socket.end();
});
server.listen(process.argv[2]);
*/

// 11
/*
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
  //var readStream = fs.createReadStream(process.argv[3]);
  //readStream.on('open', function(){
    //readStream.pipe(response);
  //});
  fs.createReadStream(process.argv[3]).pipe(response)
});
server.listen(process.argv[2]);
*/

//12
/*
var http = require('http');
var map = require('through2-map');
var fs = require('fs');

var server = http.createServer(function(request, response){
  if (request.method != "POST") {
    return response.end("send me a POST please!");
  }

  if (request.method == "POST") {
    request.pipe(map(function (chunk){
      return chunk.toString().toUpperCase();
    })).pipe(response)
  }

});
server.listen(process.argv[2]);
*/

// 13

var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){

  if(request.url.indexOf('/api/parsetime') != -1){
    var queryData = url.parse(request.url, true).query;
    response.writeHead(200, { 'Content-Type': 'application/json' });

    var current = new Date(queryData.iso);
    response.end(JSON.stringify({
      "hour": current.getHours(),
      "minute": current.getMinutes(), 
      "second": current.getSeconds(),
    }));
  }

  if(request.url.indexOf('/api/unixtime') != -1){
    var queryData2 = url.parse(request.url, true).query;
    response.writeHead(200, { 'Content-Type': 'application/json' });

    var unixTime = queryData2.iso;
    var current = new Date(unixTime);
    response.end(JSON.stringify({ "unixtime": current.getTime() }));
  }

});
server.listen(process.argv[2]);







