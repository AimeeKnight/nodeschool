fs = require('fs');

var x = {
  'return_path': 'wilmaflin@tstone.com',
  'address': {
      'email': 'wilmaflin@yahoo.com',
      'name': 'Wilma'
  },
  'metadata': {
      'place': 'Bedrock'
  },
  'substitution_data': {
      'subrcptkey': 'subrcptvalue'
  },
  'tags': [
      'greeting',
      'prehistoric',
      'fred',
      'flintstone'
  ]
};

var data = [];

for (var i=0; i < 45000; i++) {
  data.push(x);
}

fs.writeFile('mockJson.js', JSON.stringify(data, null, 4), function(err) {
  console.log(data.length);
});
