import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

    useNowPlayingMovies();

    return (
        <div className='flex'>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}
export default Browse;