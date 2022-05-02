import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Return from "../../components/return/Return";

function MovieDetail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setData(json.data.movie);
        setLoading(false);
    }
    useEffect(()=>{
        getMovie();
        // waring 무시
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[]);

    return (
        <div>
            <Return title="Detail" />
            {loading ? <strong>loading...</strong> : null}
            <h2>{data.title}</h2>
            <img src={data.medium_cover_image} alt={data.title}/>
        </div>
    );
}

export default MovieDetail;
