import { BG_Image } from "../utils/constants";
import GptMovieList from "./GptMovieList";
import SearchGpt from "./SearchGpt";
const GptsearchPage = () => {
    return (
        <>
            <div className="absolute -z-10">
                <img src={BG_Image}
                    alt="background" />
            </div>
            <SearchGpt />
            <GptMovieList />
        </>

    )
}
export default GptsearchPage;