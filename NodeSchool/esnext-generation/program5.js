module.exports = function *multiplier() {
    // `yield` all integers multiplied by the value passed in via `.next()`
    var iter = 0, multiplier;
    while(true) {
        iter++;
        if(multiplier) multiplier = yield iter * multiplier;
        else multiplier = yield iter;
    }
};