var alwaysThrows = () => {
    throw new Error("OH NOES");
};

var iterate = (num) => {
    console.log(num);
    return num + 1;
};

Promise.resolve(iterate(1))
    .then(iterate).then(iterate).then(iterate).then(iterate)
    .then(alwaysThrows)
    .then(iterate).then(iterate).then(iterate).then(iterate).then(iterate)
    .catch(e => console.log(e.message));