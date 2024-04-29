import { useRef } from "react"
import language from "../utils/languageConstants"
import { useSelector, useDispatch } from "react-redux"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, OPENAI_KEY } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useState } from "react";
import ShimmerMovieList from "../utils/ShimmerMovieList"

const SearchGpt = () => {
    const langSelect = useSelector(store => store.config.lang)
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const [showShimmer, SetShimmer] = useState(false);
    const searchMovieTmdb = async (movie) => {
        const movies = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);

        const json = await movies.json();
        return json.results;
    }

    const handleGPTsearchClick = async () => {
        SetShimmer(true);

        // Access your API key (see "Set up your API key" above)
        const genAI = new GoogleGenerativeAI(OPENAI_KEY);

        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = "Act as a movie recommadation system and suggest some movies for the query " + searchText.current.value + ". only give me names of 5 movies , comma seperated like the example result given ahead. Example Result: Bahubali, RRR, Pushpa, Leo, Guntur karam"
        const result = await model.generateContent(prompt);
        const response = result.response.text();
        console.log(response)
        if (!response) {
            //return <ShimmerMovieList />
            // TODO:Write error handling
        }
        const gptMovies = response.split(",");
        const promiseData = gptMovies.map((movie) => searchMovieTmdb(movie));
        console.log(promiseData);
        const tmdbResults = await Promise.all(promiseData);
        console.log(tmdbResults, "tmdbresults");
        //const text = response.text();
        //console.log(text)
        dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
        SetShimmer(false);
    }
    return (
        <div className="flex flex-col">
            <div className="pt-[50%] md:pt-[10%] flex justify-center ">
                <form className="bg-black w-full md:w-1/2 grid grid-cols-10 border border-red-700 rounded-md"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input ref={searchText} className="p-2 m-2 rounded-md col-span-7" type="text"
                        placeholder={language[langSelect].type} />

                    <button className="bg-red-700 text-white p-2 m-2 rounded-md col-span-3"
                        onClick={handleGPTsearchClick} >
                        {language[langSelect].search}</button>
                </form>
            </div>
            <div className="mt-6 text-center">
                {showShimmer && <ShimmerMovieList />}
            </div>

        </div>

    )
}
export default SearchGpt;