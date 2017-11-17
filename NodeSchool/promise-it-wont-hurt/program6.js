Promise.resolve("got it").then((value) => console.log(value));

Promise.reject(new Error("you are a good man.")).catch((err) => console.log(err.message));
