var slice = Array.prototype.slice

function logger(namespace) {
    // SOLUTION GOES HERE
    return (function() {
        console.log.apply(null, [namespace].concat([].slice.call(arguments)));
    });
}

module.exports = logger
