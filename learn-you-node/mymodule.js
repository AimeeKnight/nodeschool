var fs = require('fs');

module.exports = function (directory, extension, callback) {
  var filteredList = [];

  fs.readdir(directory, function (err, list) {
    if (err)
      return callback(err)

    for (var i = 0; i < list.length; i++){
      if (list[i].indexOf("." + extension) != -1){
        filteredList.push(list[i]);
      }
    }

    return callback(null, filteredList)
  })
}
