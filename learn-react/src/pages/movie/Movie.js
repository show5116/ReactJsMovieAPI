import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({ id,medium_cover_image, title, summary, genres }){
    return (
        <div>
            <img src={medium_cover_image} alt={title}></img>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary.length > 235 ? `${summary.slice(0 , 235)}...` : summary}</p>
            {(genres !== null || genres !== undefined) ?
                <ul>
                    {genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul> :
                null}
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie;
