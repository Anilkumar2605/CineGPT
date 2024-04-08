import VideoBG from './VideoBG'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return;
    const mainmovie = movies[0];
    //console.log(mainmovie);
    const { original_title, overview, id } = mainmovie;
    return (
        < div >
            <VideoBG movie_id={id} />
            <VideoTitle title={original_title} overview={overview} />
        </div >
    )
}
export default MainContainer;