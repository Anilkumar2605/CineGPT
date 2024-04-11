import language from "../utils/languageConstants"
import { useSelector } from "react-redux"

const SearchGpt = () => {
    const langSelect = useSelector(store => store.config.lang)
    return (
        <div>
            <div className="pt-[10%] flex justify-center ">
                <form className="bg-black w-1/2 grid grid-cols-10 border border-red-700 rounded-md">
                    <input className="p-2 m-2 rounded-md col-span-7" type="text"
                        placeholder={language[langSelect].type} />

                    <button className="bg-red-700 text-white p-2 m-2 rounded-md col-span-3">
                        {language[langSelect].search}</button>
                </form>
            </div>
        </div>

    )
}
export default SearchGpt;