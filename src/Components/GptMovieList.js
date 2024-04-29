import { useSelector } from "react-redux"
import MovieList from "./MovieList";
const GptMovieList = () => {

    const { movieNames, movieResults } = useSelector(store => store.gpt);

    if (!movieNames) return null;

    return (
        <div className="p-4 m-4 bg-opacity-80 bg-black text-white font-sans ">
            <div>
                {movieNames.map((movieName, index) =>
                    <MovieList key={movieNames}
                        title={movieName}
                        movies={movieResults[index]} />
                )}
            </div>
        </div>
    )
}
export default GptMovieList;