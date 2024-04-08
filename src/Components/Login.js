import Header from "./Header"
import { useRef, useState } from "react"
import { checkValidatingForm } from "../utils/checkValidatingForm"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice";
import { User_Avatar } from "../utils/constants";


const Login = () => {

    const [SignUp, SetSignUp] = useState(true)
    const [errorMessage, setMessage] = useState(null);
    const dispatch = useDispatch()

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const checkForm = () => {
        //console.log(email.current.value);
        //console.log(password.current.value);
        //console.log(name.current.value)
        const errorInfo = checkValidatingForm(email.current.value, password.current.value, name.current?.value);
        //console.log(errorMessage)
        setMessage(errorInfo);
        if (errorInfo) return;

        if (!SignUp) {


            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: User_Avatar
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))

                    }).catch((error) => {
                        errorMessage(error.message)
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMessage(errorMessage)
                    console.error(errorCode)
                });
        }
        else {

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    //console.log(user)

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMessage(errorMessage)
                    console.error(errorCode)
                });

        }

    }

    const toggleSignup = () => {
        SetSignUp(!SignUp)
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                    alt="background" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className=" w-4/12 bg-black bg-opacity-80 p-6 absolute my-36 text-white mx-auto right-0 left-0">
                <h1 className="text-3xl py-2 m-2">{SignUp ? "Sign In" : "Sign Up"}</h1>

                {!SignUp ? <input
                    ref={name}
                    type="text"
                    className="p-3 w-full my-4 rounded-md bg-slate-600"
                    placeholder="Full Name" /> : null
                }

                {errorMessage === "Name not valid" ? < p className="m-1 text-red-700">{errorMessage}</p> : null}

                <input
                    ref={email}
                    className="p-3 w-full my-4 bg-slate-600 rounded-md"
                    type="text" placeholder="email" />
                {errorMessage === "email not valid" ? < p className="m-1 text-red-700">{errorMessage}</p> : null}

                <input ref={password}
                    className="p-3 w-full my-4 rounded-md bg-slate-600"
                    type="password" placeholder="password" />
                {errorMessage === "Password not valid" ? < p className="m-1 text-red-700">{errorMessage}</p> : null}

                {errorMessage === "Firebase: Error (auth/invalid-credential)." ? < p className="m-1 text-red-700">Invalid Details</p> : null}

                <button
                    className="p-3 w-full my-4 bg-red-700  rounded-md"

                    onClick={checkForm}>Submit</button>


                {
                    SignUp ? <p className="text-sm py-4">Don't Have account? <span onClick={toggleSignup} className="text-red-700 cursor-pointer">Sign Up</span></p> :
                        <p className="text-sm py-4">Have account <span onClick={toggleSignup} className="text-red-700 cursor-pointer">Sign In</span></p>
                }

            </form>

        </div >
    )
}
export default Login