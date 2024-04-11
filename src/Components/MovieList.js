import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
    return (
        <div className="bg-black p-4">
            <h1 className="text-white text-3xl" >{title}</h1>
            <div className="flex overflow-x-scroll  w-screen">
                <div className="flex">
                    {movies?.map((movie) => (
                        <MovieCart key={movie.id} posterPath={movie.poster_path} />
                    ))}

                </div>
            </div>
        </div>
    )
}
export default MovieList;