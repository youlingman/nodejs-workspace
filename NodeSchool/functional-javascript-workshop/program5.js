function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        return submittedUsers.every(function (t) {
            return goodUsers.some(function (t2) {
                return t.id === t2.id
            })
        })
    };
}

module.exports = checkUsersValid
