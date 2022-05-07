const client = require('./connection.js');


client.cluster.health({}, (err, resp, stats) => {
    console.log("-- Client Health --",resp);
});

client.count({index: 'movies',type: 'movie'},function(err,resp,status) {  
    console.log("movie",resp);
  });