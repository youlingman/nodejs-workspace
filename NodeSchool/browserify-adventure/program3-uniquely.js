module.exports = function (input) {
    var uniq = require('uniq');
    return uniq(input.split(','));
};