const Movie = (props) => {
    return(
        <div class = "MovieCover">
            <img src = {props.image} alt = {props.title}/>
                <h2>{props.title}</h2>
                <h3>Rating: {props.imdb}/10</h3>
                <a href = {props.link}>
                    <button id = "link">Check Reviews on IMDb</button>
                </a>
        </div>
    )
}
export default Movie;