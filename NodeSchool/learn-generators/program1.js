function* range(from, to) {
    // your code goes here
    var it = from;
    while(it <= to) {
        yield it++;
    }
}

for (var r of range(5, 10)) {
    console.log(r);
}
// should print: 5, 6, 7, 8, 9, 10