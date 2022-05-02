import {useEffect, useState} from "react";
import Movie from "./Movie";
import Return from "../../components/return/Return";

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
        <div>
            <Return title="The Movie App!"/>
            <div>
                {loading ?
                    (<strong>Loading...</strong>) :
                    (<div>
                        {movies.map((movie) =>(
                            <Movie
                                key ={movie.id}
                                id ={movie.id}
                                medium_cover_image={movie.medium_cover_image}
                                title={movie.title}
                                summary={movie.summary}
                                genres={movie.genres}/>
                        ))}
                    </div>)}
            </div>
        </div>
    );
}

export default MovieApp;
