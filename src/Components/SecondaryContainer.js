import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store?.movies);
    return (
        movies.nowPlayingMovies && (
            <div className="bg-black w-screen">
                <div className="mt-0 md:-mt-52 pl-1 md:pl-0 relative z-20 pt-[0%] md:pt-[13%]">
                    <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                    <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
                    <MovieList title={"Popular"} movies={movies?.popularMovies} />
                    <MovieList title={"Up Coming"} movies={movies?.upcomingMovies} />
                </div>
            </div>
        )
    );
}
export default SecondaryContainer;