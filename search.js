var client = require('./connection.js');

client.search({  
    index: 'movies',
    type: 'movie',
    body: {
      query: {
        match: {
            description: {
                query: 'unique soon',
                fuzziness: 'AUTO',
                operator: "or",
                minimum_should_match: 1
            }
        }
      },
    }
}, (err, response, status) => {
    if (err){
        console.log(err);
    }else {
        console.log("-- [0] -- \n" + response.body.hits.hits[0]._source.description);
        console.log("-- [1] -- \n" + response.body.hits.hits[1]._source.description);
    }
});