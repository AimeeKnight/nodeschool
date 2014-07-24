
function upperCaser(input) {
  return input.toUpperCase();
}

function repeat(operation, num) {
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}

function doubleAll(numbers){
  return numbers.map(function(num){
    return num * 2;
  });
}

function getShortMessage(messages){
  return messages.filter(function(x){
    return x.message.length < 50
  }).map(function(x){
    return x.message
  })
}

function checkUsersValid(goodUsers){
  return function(submittedUsers){
    return submittedUsers.every(function(submittedUser){
      return goodUsers.some(function(user){
        return user.id === submittedUser.id
      });
    });
  };
}

function countWords(inputWords){
  return inputWords.reduce(function(counter, word) {
    // increment counter key value if it's already present
    counter[word] = ++ counter[word] || 1
    return counter;
  }, {});
}

module.exports = countWords


