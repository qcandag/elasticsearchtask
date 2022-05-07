const client = require('./connection.js');

client.indices.create({
    index: 'movies'
}, (err,resp, status) => {
    if (err) {
        console.log(err);
    } else {
        console.log("-- Index Created --", resp);
    }
});