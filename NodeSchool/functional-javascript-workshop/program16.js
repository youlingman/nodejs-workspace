function getDependencies(tree) {
    // SOLUTION GOES HERE
    // Note: Feel free to add additional arguments
    // to this function for use with recursive calls.
    // Or not! There are many ways to recurse.
    var result = [];
    if (tree && tree['dependencies'] && typeof tree['dependencies'] === 'object') {
        var dependenciesObj = tree['dependencies'];
        var dependencies = Object.getOwnPropertyNames(dependenciesObj);
        for (var i = 0; i < dependencies.length; i++) {
            result.push(dependencies[i] + '@' + dependenciesObj[dependencies[i]]['version']);
            // todo recursive here
            result = result.concat(getDependencies(dependenciesObj[dependencies[i]]));
        }
    }
    return result.filter(function (elem, index, array) {
        return array.indexOf(elem) === index;
    }).sort();
}

module.exports = getDependencies