const client = require('./connection.js');

client.indices.delete({index:'movies'}, (err,resp,status) => {
    console.log("-- Index Deleted --", resp)
})