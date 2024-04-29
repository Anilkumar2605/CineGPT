import VideoBG from './VideoBG'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies) return;
    //console.log(movies, "Trailer")
    const mainmovie = movies[0];
    //console.log(mainmovie, "MainContainer");
    const { original_title, overview, id } = mainmovie;
    return (

        < div className='pt-[36%] md:pt-0 bg-black' >
            <VideoTitle title={original_title} overview={overview} />
            <VideoBG movie_id={id} />

        </div >

    )
}
export default MainContainer;