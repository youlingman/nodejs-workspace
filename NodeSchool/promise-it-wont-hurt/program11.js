function all(promise1, promise2) {
    return new Promise((resolve, reject) => {
        let counter = 0;
        let ans = [];
        promise1.then((value) => {
            counter++;
            ans[0] = value;
            if(counter === 2) resolve(ans);
        });
        promise2.then((value) => {
            counter++;
            ans[1] = value;
            if(counter === 2) resolve(ans);
        });
    });
}

all(getPromise1(), getPromise2()).then(console.log);