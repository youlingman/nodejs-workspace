console.log(parseComment`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function parseComment(template, ...args) {
    // console.log(template);
    var s = template[0];
    for (var i = 0; i < args.length; i++) {
        // console.log(args[i]);
        // Escape special characters in the substitution.
        s += args[i].replace(/&/g, "&amp;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        // Don't escape special characters in the template.
        s += template[i + 1];
    }
    return s;
}