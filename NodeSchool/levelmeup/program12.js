var net = require('net');
var multilevel = require('multilevel');

module.exports = function (callback) {
    var db = multilevel.client();
    var connection = net.connect(4545);
    connection.pipe(db.createRpcStream()).pipe(connection);
    db.get('multilevelmeup', function (err, data) {
        connection.end(function() {
            // console.log(data);
            callback(err, data);
        });
        // connection.end(data, function() {
        //     callback(err);
        // });
    });
};
