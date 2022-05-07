const client = require('./connection.js');

client.index({
    index: 'movies',
    type: 'movie',
    id: '1',
    body: {
        movie_name:'Avatar',
        description: 'Soon after hitting theaters in 2009, Avatar became one of the highest grossing movies of all time. Using the newly invented (at that time) motion capture technique, 3-D viewing and the use of stereoscopic filmmaking, it’s no surprise that the film won an Academy Award, in addition to several other awards for its visual effects.'
    }
}, (err,resp,stat) => {
    console.log(resp)
});