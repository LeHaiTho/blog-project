import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice.js";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("All required fields!"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        return dispatch(signInFailure(data.message));
      }
      // success
      if (res.ok) {
        navigate("/");
        return dispatch(signInSuccess(data));
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="mt-20 min-h-screen">
      <div className="flex flex-col p-3 md:flex-row max-w-3xl mx-auto gap-5 md:items-center">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 text-white bg-pink-600 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500">
              HaiTho&#39;s
            </span>
            Blog
          </Link>
          <p className="mt-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            alias, quisquam quibusdam iure animi rep.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="">
              <Label value="Your email" />
              <TextInput
                id="email"
                type="email"
                placeholder="name@flowbite.com"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput
                id="password"
                type="password"
                placeholder="Your password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner aria-label="Spinner button example" size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className="flex gap-2 mt-2 text-sm">
            <span>Don't have an account?</span>
            <Link to="/sign-up" className="text-purple-500 font-semibold">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure" icon={HiInformationCircle}>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
