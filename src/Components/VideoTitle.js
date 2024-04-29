const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pr-0 pt-[18%] px-6 md:px-24 absolute bg-gradient-to-r to-black text-white">
            <h1 className="text-2xl md:text-4xl  font-bold">{title}</h1>
            <p className="hidden md:inline-block py-6 text-justify font-thin  w-1/3">{overview}</p>
            <div className="my-2 md:m-0">
                <button className="border border-black bg-white px-2 py-1 md:px-4 md:py-2 rounded-md font-semibold text-black hover:bg-opacity-50">
                    ▷ Play</button>
                <button className="border border-black bg-gray-500 px-2 py-1 md:px-4 md:py-2 mx-5 rounded-md font-semibold bg-opacity-60 hover:bg-opacity-100">ⓘ More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;