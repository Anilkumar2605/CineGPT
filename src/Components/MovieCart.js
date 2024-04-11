import { IMG_CDN_URL } from "../utils/constants";

const MovieCart = ({ posterPath }) => {
    return (
        <div className="w-36 pt-2 pr-2">
            <img alt="poster"
                src={IMG_CDN_URL + posterPath}
            />

        </div>
    )
}
export default MovieCart;