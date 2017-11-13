function loadUsers(userIds, load, done) {
    var users = [];
    var count = 0;
    for (var i = 0; i < userIds.length; i++) {
        load(userIds[i], function(data) {
            users[i] = data;
            count++;
            if(count === userIds.length) done(users);
        });
    }
}

module.exports = loadUsers;