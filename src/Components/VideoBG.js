import { useSelector } from "react-redux"
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBG = ({ movie_id }) => {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    useMovieTrailer(movie_id);

    return (
        <div className="w-screen absolute">
            <iframe className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >

            </iframe>
        </div>
    )
}
export default VideoBG;