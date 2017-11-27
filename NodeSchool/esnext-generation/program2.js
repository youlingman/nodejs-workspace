module.exports = function filterForNumbers(iterable) {
    // loop over iterable, adding numeric values to a new array
    // then return the new array of numbers
    var ans = [];
    for(var i of iterable) {
        if (typeof i === 'number') ans.push(i);
    }
    return ans;
};