import { auth } from '../utils/firebase'
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from 'react';
import { LOGO } from '../utils/constants';

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


    return (
        <div className="absolute bg-gradient-to-b from-black z-30 w-screen flex justify-between">
            <img src={LOGO}
                className="w-44" alt="logo" />
            {user &&
                <div className="flex justify-between w-auto m-2">
                    <img className="m-3 p-1 w-12 h-12" src={user.photoURL}
                        alt="icon" />
                    <button onClick={handleSignout} className="border border-red-700 bg-black text-white m-4 py-1 px-1 rounded-md">
                        Signout</button>
                </div>
            }

        </div>
    )
}
export default Header;