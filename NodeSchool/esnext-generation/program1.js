module.exports = function makeCounter(someObj) {

    var iter = {
        value: 0,
        done: false
    };

    someObj.next = function () {
        // complete me
        iter.value++;
        if (iter.value > 10) iter.done = true;
        return iter;
    }

};