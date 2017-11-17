var parsePromised = () => new Promise((resolve, reject) => {
    try {
        resolve(JSON.parse(process.argv[2]));
    } catch (e) {
        reject(e.message);
    }
});

parsePromised().then(null, console.log);