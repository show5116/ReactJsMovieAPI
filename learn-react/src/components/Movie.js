import PropTypes from "prop-types";

function Movie({ medium_cover_image, title, summary, genres }){
    return (
        <div>
            <img src={medium_cover_image} alt={title}></img>
            <h2>{title}</h2>
            <p>{summary}</p>
            {(genres != null || genres != undefined) ?
                <ul>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul> :
                null}
        </div>
    );
}

Movie.prototype = {
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie;
