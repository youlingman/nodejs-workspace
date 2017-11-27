module.exports = function *generate(isEven) {
    // `yield` either odd or even numbers based on `isEven`
    var value = isEven ? 0 : -1;
    while(true) {
        value += 2;
        yield value;
    }
};