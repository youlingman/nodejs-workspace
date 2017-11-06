function reduce(arr, fn, initial) {
      // SOLUTION GOES HERE
	  if(!arr.length) return initial;
	  else return reduce(arr.slice(1), fn, fn(initial, arr[0], 0, arr));
}

module.exports = reduce