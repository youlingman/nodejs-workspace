let inputs = process.argv.slice(2);
let ans = inputs
    .map((str) => str[0])
    .reduce((res, char) => res + char, "");

console.log(`[${inputs}] becomes "${ans}"`);