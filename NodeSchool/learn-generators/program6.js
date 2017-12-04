function askFoo() {
    return new Promise(function (resolve, reject) {
        resolve('foo');
    });
}

function run(generator) {
    // your code goes here
    var it = generator();
    it.next().value.then((value) => it.next(value)).catch((err) => it.throw(err));
}

run(function* () {
    // improve: errors?
    try {
        var foo = yield askFoo();
        console.log(foo);
    } catch (e) {
        console.error(e);
    }
});
