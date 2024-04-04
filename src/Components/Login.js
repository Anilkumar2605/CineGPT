import Header from "./Header"
import { useState } from "react"

const Login = () => {

    const [SignUp, SetSignUp] = useState(true)

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
            <form className=" w-4/12 bg-black bg-opacity-80 p-6 absolute my-36 text-white mx-auto right-0 left-0">
                <h1 className="text-3xl py-2 m-2">{SignUp ? "Sign In" : "Sign Up"}</h1>
                <input className="p-3 w-full my-4 bg-slate-600 rounded-md" type="text" placeholder="email" />
                {!SignUp ? <input className="p-3 w-full my-4 rounded-md bg-slate-600" type="text" placeholder="Full Name" /> : null}
                <input className="p-3 w-full my-4 rounded-md bg-slate-600" type="password" placeholder="password" />
                <button className="p-3 w-full my-4 bg-red-700  rounded-md">Submit</button>
                {
                    SignUp ? <p className="text-sm py-4">Dont Have account <span onClick={toggleSignup} className="text-red-700 cursor-pointer">Sign Up</span></p> :
                        <p className="text-sm py-4">Have account <span onClick={toggleSignup} className="text-red-700 cursor-pointer">Sign In</span></p>
                }

            </form>

        </div >
    )
}
export default Login