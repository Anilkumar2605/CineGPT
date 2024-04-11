import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store?.movies);
    return (
        movies.nowPlayingMovies &&
        <div className="pt-[50%] absolute">
            <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
            <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
            <MovieList title={"Popular"} movies={movies?.popularMovies} />
            <MovieList title={"Up Coming"} movies={movies?.upcomingMovies} />
        </div>
    );
}
export default SecondaryContainer;