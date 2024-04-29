import { BG_Image } from "../utils/constants";
import GptMovieList from "./GptMovieList";
import SearchGpt from "./SearchGpt";
const GptsearchPage = () => {
    return (
        <>
            <div className="fixed -z-10">
                <img className="h-screen object-cover w-screen" src={BG_Image}
                    alt="background" />
            </div>
            <div className="">

                <SearchGpt />
                <GptMovieList />
            </div>
        </>

    );
};
export default GptsearchPage;