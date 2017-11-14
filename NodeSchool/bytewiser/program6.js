process.stdin.once('data', function (chunk) {
    console.log(JSON.stringify(new Uint8Array(chunk)));
});