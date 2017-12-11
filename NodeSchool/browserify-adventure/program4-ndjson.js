exports.parse = str => str.split('\n').map(JSON.parse);

exports.stringify = rows => rows.map(JSON.stringify).join('\n');