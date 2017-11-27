module.exports = function generate(isEven) {
    // return an Iterator for even numbers if isEven is true
    // or, return an Iterator for odd numbers if isEven is false
    // If `.next(swap)` receives `true`, swap between even <-> odd
    return {
        value: isEven ? 0 : -1,
        done: false,
        isEven : this.value % 2 === 0,
        next: function (swap) {
            this.value += (swap ? 1 : 2);
            return this;
        }
    };
};