import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";
import {useState} from "react";
import {useMediaQuery} from "react-responsive";

function Movie({ id,medium_cover_image, title,year, summary, genres }){
    const [hovered, setHovered] = useState(false);

    const onMouseOver = () => {
        setHovered(true);
    }

    const onMouseOut = () => {
        setHovered(false);
    }

    return (
        <div className={styles.section}>
            <div className={styles.movie}>
                <div onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={styles.img__container}>
                    <img className={styles.movie__img} src={medium_cover_image} alt={title}></img>
                    {hovered ? <Link className={styles.movie__detail} to={`/movie/${id}`}>상세보기</Link> : null}
                </div>
                <div>
                    <div className={styles.movie__content}>
                        <h2 className={styles.movie__title}>
                            <Link to={`/movie/${id}`}>{title}</Link>
                        </h2>
                        <div className={styles.movie__year}>{year}</div>
                        <p className={styles.movie__summary}>{summary.length > 235 ? `${summary.slice(0 , 235)}...` : summary}</p>
                    </div>
                    {(genres !== null || genres !== undefined) ?
                        <ul className={styles.movie__genres}>
                            {genres.map((g) => (
                                <li key={g}>{g}</li>
                            ))}
                        </ul> :
                        null}
                </div>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie;
