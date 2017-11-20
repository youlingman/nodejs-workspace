module.exports = function average(...arg/* what goes here */) {
    // what goes here?
    return arg.reduce((acc, item) => acc + item, 0) / arg.length;
};