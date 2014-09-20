
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

function reduce(arr, fn, initial) {
  if (arr.length === 0) {
    return initial
  }else {
    var current = arr.shift();
    initial = fn(initial, current)
    return reduce(arr, fn, initial);
  }
}

function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value;
    return reduceOne(index + 1, fn(value, arr[index], index, arr));
  })(0, initial);
}

// Call

function duckCount() {
  function countDuck(args, index, total) {
    var current = args[index];
    if (index >= args.length) {
      return total.length;
    } else if (Object.prototype.hasOwnProperty.call(current, "quack")) {
      total.push(current);
    }
    return countDuck(args, index+=1, total)
  }
  return countDuck(arguments, 0, [])
}

function duckCount2() {
  return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}

// Partial Application without Bind

var slice = Array.prototype.slice

function logger(namespace) {
  return function(args) {
    var array1 = slice.call(arguments);
    var combined = [namespace].concat(array1);
    console.log.apply(console, combined)
  }
}

// Partial Application with Bind
function loggerWithBind(namespace) {
  return console.log.bind(console, namespace)
}

// Implement Map with Reduce

function arrayMap(arr, fn) {
  return arr.reduce(function(previousValue, currentValue) {
    var temp = fn(currentValue);
    return previousValue.concat(temp);
  }, []);
}

// Function Spies

function Spy(target, method) {
  var originalFunction = target[method];
  var result = {
    count: 0
  };
  target[method] = function() {
    result.count++;
    return originalFunction.apply(this, arguments);
  }
  return result;
}

module.exports = Spy;
