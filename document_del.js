const client = require('./connection.js');

client.delete({  
  index: 'movies',
  id: '1',
  type: 'movie'
},function(err,resp,status) {
    console.log(resp);
});