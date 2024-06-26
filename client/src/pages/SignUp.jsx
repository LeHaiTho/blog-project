import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import Oauth from "../components/Oauth";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate
    if (!formData.username || !formData.username || !formData.password) {
      return setErrorMessage("All fields must be required !");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setErrorMessage(data.message);
        setLoading(false);
      }
      // success
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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
              <Label value="Your username" />
              <TextInput
                id="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
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
                "Sign Up"
              )}
            </Button>
            <Oauth />
          </form>
          <div className="flex gap-2 mt-2 text-sm">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-purple-500 font-semibold">
              Sign In
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

export default SignUp;
