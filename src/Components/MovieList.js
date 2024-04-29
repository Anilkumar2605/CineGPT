import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
    return (
        <div className="px-6">
            <h1 className="text-lg text-white md:text-3xl py-4" >{title}</h1>
            <div className="flex overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
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