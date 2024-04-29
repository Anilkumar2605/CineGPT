import { IMG_CDN_URL } from "../utils/constants";

const MovieCart = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className="w-24 md:w-36 pr-2">
            <img alt="poster"
                src={IMG_CDN_URL + posterPath}
            />
        </div>
    )
}
export default MovieCart;