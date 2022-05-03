import {useEffect, useState} from "react";
import Movie from "./Movie";
import styles from "./MovieApp.module.css"
import Loading from "../../components/loading/Loading";

function MovieApp() {
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(()=>{
        getMovies();
    },[]);

    return (
        <div className={styles.app__container}>
            <h1 className={styles.title}>The Movie App</h1>
            {loading ?
                (<Loading />) :
                (<div className={styles.movie__container}>
                    {movies.map((movie) =>(
                        <Movie
                            key ={movie.id}
                            id ={movie.id}
                            medium_cover_image={movie.medium_cover_image}
                            title={movie.title}
                            year={movie.year}
                            summary={movie.summary}
                            genres={movie.genres}/>
                    ))}
                </div>)}
        </div>
    );
}

export default MovieApp;
