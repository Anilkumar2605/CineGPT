import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/moviesSlice"

const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch();
    const getTrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movie_id + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        //console.log(json);
        const filteredData = json.results.filter((movie) => movie.type === 'Trailer');
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer))
        //console.log(trailer);
    }

    useEffect(() => {
        getTrailer();
    }, [])

}
export default useMovieTrailer;