import Movie from './Movie'

const Movies = () => {
    return(
        <div class = "Card">
            <Movie image = '/images/ponyo.jpg' title = 'Ponyo' imdb = '7.6' link = "https://www.imdb.com/title/tt0876563/"/>
            <Movie image = '/images/arrietty.webp' title = 'The Secret World of Arrietty' imdb = '7.6' link = "https://www.imdb.com/title/tt1568921/"/>
            <Movie image = '/images/castle.jpg' title = 'Castle in the Sky' imdb = '8' link = "https://www.imdb.com/title/tt0092067/"/>
            <Movie image = '/images/heron.jpg' title = 'The Boy and the Heron' imdb = '7.3' link = "https://www.imdb.com/title/tt6587046/"/>
            <Movie image = '/images/howl.webp' title = "Howl's Moving Castle" imdb = '8.2' link = "https://www.imdb.com/title/tt0347149/"/>
            <Movie image = '/images/kiki.jpg' title = "Kiki's Delivery Service" imdb = '7.8' link = "https://www.imdb.com/title/tt0097814/"/>
            <Movie image = '/images/mononoke.jpg' title = 'Princess Mononoke' imdb = '8.3' link = "https://www.imdb.com/title/tt0119698/"/>
            <Movie image = '/images/spirited.jpg' title = "Spirited Away" imdb = '8.6' link = "https://www.imdb.com/title/tt0245429/"/>
            <Movie image = '/images/totoro.jpg' title = "My Neighbor Totoro" imdb = '8.1' link = "https://www.imdb.com/title/tt0096283/"/>
            <Movie image = '/images/wind.jpg' title = 'The Wind Rises' imdb = '7.8' link = "https://www.imdb.com/title/tt2013293/"/>
        </div>
    )
}
export default Movies;