// http://nodeguide.com/
// Return statements
// Good
function isPercentage(val) {
  if (val < 0) {
    return false;
  }
  if (val > 100) {
    return false;
  }
  return true;
}
// Bad
function isPercentage(val) {
  if (val >= 0) {
    if (val < 100) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
// Better
function isPercentage(val) {
  var isInRange = (val >= 0 && val <= 100);
  return isInRange;
}

// Closures
// provde names for a better stack trace
// Good
req.on('end', function onEnd() {
  console.log('winning');
});

// Also prevents nesting
setTimeout(function() {
  client.connect(afterConnect);
}, 1000);

function afterConnect() {
  console.log('winning');
}

// Bad
req.on('end', function() {
  console.log('losing');
});

setTimeout(function() {
  client.connect(function() {
    console.log('losing');
  });
}, 1000);

// http://book.mixu.net/node/
// Sample event emitter class
var SimpleEE = function() {
  this.events = {};
};
SimpleEE.prototype.on = function(eventname, callback) {
  this.events[eventname] || (this.events[eventname] = []);
  this.events[eventname].push(callback);
};
SimpleEE.prototype.emit = function(eventname) {
  // partical application
  var args = Array.prototype.slice.call(arguments, 1);
  if (this.events[eventname]) {
    this.events[eventname].forEach(function(callback) {
      callback.apply(this, args);
    });
  }
};

var emitter = new SimpleEE();
emitter.on('greet', function(name) {
  console.log('Hello, ' + name + '!' );
});
emitter.on('greet', function(name) {
  console.log('World, ' + name + '!' );
});
['foo', 'bar', 'baz'].forEach(function(name) {
  emitter.emit('greet', name);
});
