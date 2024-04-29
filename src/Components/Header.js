import { auth } from '../utils/firebase'
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from 'react';
import { LOGO, Supported_Language } from '../utils/constants';
import { toggleGptSearchView } from "../utils/gptSlice"
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignout = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate('/error')
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate('/browse')
            } else {
                dispatch(removeUser());
                navigate('/')
            }
        });
        //unsubscribe when component unmountss
        return () => unsubscribe();
    }, [])

    const handleGptSearch = () => {
        dispatch(toggleGptSearchView());
    }

    const handleLangChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    const gptLangOption = useSelector(store => store.gpt.showGptsearch);

    return (
        <div className="absolute z-10 w-screen px-4 py-2 md:px-0 md: bg-gradient-to-b from-black md:pt-[0%] flex flex-col space-y-[-4%] md:space-y-0 md:flex-row justify-between">
            <img src={LOGO} className="w-44 mx-auto md:mx-0" alt="logo" />

            {user && (

                <div className="flex p-2 justify-between">

                    {
                        gptLangOption &&
                        <select className='bg-black text-white border border-red-700 m-4 px-1 rounded-md'
                            onChange={handleLangChange}
                        >
                            {Supported_Language.map(lang => <option
                                key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                        </select>
                    }


                    <button className='bg-black text-white border border-red-700 m-4 px-1 rounded-md '
                        onClick={handleGptSearch}
                    >{gptLangOption ? "Home" : "GPT Search"}</button>

                    <button
                        onClick={handleSignout}
                        className="border border-red-700 bg-black text-white m-4 px-0 md:px-1 rounded-md col-span-3 whitespace-nowrap overflow-hidden overflow-ellipsis" >
                        Sign out
                    </button>

                    <img
                        className="m-3 p-1 w-12 h-12 rounded-full"
                        src={user.photoURL}
                        alt="icon"
                    />

                </div>
            )}
        </div>
    );
}
export default Header;