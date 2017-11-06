function duckCount() {
      // SOLUTION GOES HERE
	  Array.prototype.slice.call(arguments).reduce(function(count, obj) {
		  return count + (obj.hasOwnProperty('quack'));
	  }, 0);
}

module.exports = duckCount