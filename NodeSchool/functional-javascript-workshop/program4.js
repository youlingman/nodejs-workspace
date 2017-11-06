function getShortMessages(messages) {
    // SOLUTION GOES HERE
    return messages.filter(function(item) {
        return item.message.length < 50;
    }).map(function (item) { return item.message })
}

module.exports = getShortMessages