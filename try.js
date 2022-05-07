const client = require('./connection.js');

async function run (err, resp, status){

    // await client.index({
    //     index: 'movies',
    //     type: 'movie',
    //     id: '2',
    //     body: {
    //         movie_name: 'Avengers: Infinity War',
    //         description: 'With an estimated budget of $300  $400 million, Marvel’s Infinity War is one of the most expensive movies ever created. Wondering why it cost so much? Sorry to be the bearer of bad news, but those elaborate costumes and scenery were actually created digitally. It took 13 visual effects companies to create the incredibly detailed characters and scenes in this movie.'
    //     }
    // })

    await client.index({
        index: 'movies',
        type: 'movie',
        id: '3',
        body: {
            movie_name:'Inception',
            description: 'This unique and complex film follows a thief with the rare ability to enter people’s dreams and steal their secrets from their subconscious. As you might imagine, this leads to a pretty interesting storyline.'
        }
    })

    await client.index({
        index: 'movies',
        type: 'movie',
        id: '4',
        body: {
            movie_name:'Finding Nemo',
            description: 'This one is right up there with Frozen. (You’re likely starting to get a good sense of my movie taste.) Listening to Finding Nemo with audio description can take you on a wonderful deep sea dive through the Great Barrier Reef that you’ll enjoy even if you don’t like to swim.'
        }
    })

    await client.index({
        index: 'movies',
        type: 'movie',
        id: '5',
        body: {
            movie_name:'The Shape of Water',
            description: 'With a merman as this film’s romantic lead, who falls in love with the mute protagonist, you won’t want to miss The Share of Water with audio description. Don’t believe us? Watch the trailer.'
        }
    })


    await client.index({
        index: 'movies',
        type: 'movie',
        id: '6',
        body: {
            movie_name:'The Hunger Games',
            description: '"Adapted from books which rely on internal monologue, The Hunger Games movie uses dialogue as well as visuals and cutaways to create a similar feel. In addition, although fewer than the number in the book there are several memory-laden flashbacks and a hallucination scene that would be difficult to understand without audio description.'
        }
    })

    await client.index({
        index: 'movies',
        type: 'movie',
        id: '7',
        body: {
            movie_name:'La La Land',
            description: 'One of the most striking things about La La Land is the colors used in the movie. You don’t have to be a student of art to know that color choices are critical to evoking different emotions, and setting the scene.'
        }
    })

    await client.index({
        index: 'movies',
        type: 'movie',
        id: '8',
        body: {
            movie_name:'The Jungle Book',
            description: 'The new rendition of The Jungle Book was widely praised for its effective use of “virtual production.” The film was lensed entirely on a bluescreen stage in Los Angeles. The only live action in the film is the boy, Mowgli, and the small piece of set on which he stood or climbed. We’re sorry to be the bearer of bad news, but the rest of the film (including all of the animals and the jungle itself) was computer generated.'
        }
    })

    console.log('New Document Created! ')
}


run()

