const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[25%] px-12 absolute bg-gradient-to-r to-black text-white">
            <h1 className="text-4xl  font-bold">{title}</h1>
            <p className="py-6 text-justify font-thin  w-1/3">{overview}</p>
            <div className="">
                <button className="border border-black bg-white px-4 py-2 rounded-md font-semibold text-black hover:bg-opacity-50">
                    ▷ Play</button>
                <button className="border border-black bg-gray-500 px-4 py-2 mx-5 rounded-md font-semibold bg-opacity-60 hover:bg-opacity-100">ⓘ More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;