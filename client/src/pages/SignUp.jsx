import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div className="mt-20 min-h-screen">
            <div className="flex flex-col p-3 md:flex-row max-w-3xl mx-auto gap-5 md:items-center">
            {/* left */}
            <div className="flex-1">
            <Link
                to="/"
                className="text-4xl font-bold dark:text-white">
                <span className="px-2 py-1 text-white bg-pink-600 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500">
                    HaiTho&#39;s
                </span>
                Blog
            </Link>
            <p className="mt-5 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam alias, quisquam quibusdam iure animi rep.
            </p>
            </div>
            {/* right */}
            <div className="flex-1">
                <form className="flex flex-col gap-4">
                    <div className="">
                        <Label value="Your username"/>
                        <TextInput id="username" type="text" placeholder="Username" required />
                    </div>
                    <div className="">
                        <Label value="Your email"/>
                        <TextInput id="email" type="email" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="">
                        <Label value="Your password"/>
                        <TextInput id="password" type="password" placeholder="Your password" required />
                    </div>
                    <Button gradientDuoTone="purpleToPink" type="submit">
                        Sign Up
                    </Button>
                </form>
                <div className="flex gap-2 mt-2 text-sm">
                    <span>Have an account?</span>
                    <Link to="/sign-in" className="text-purple-500 font-semibold">
                        Sign In
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SignUp;
