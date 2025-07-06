import Lottie from "lottie-react";
import registraionImage from "../assets/signUp.json";
import {
  AiOutlineEye,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUser,
} from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="flex h-[700px] w-full">
      {/* form section */}
      <div className="w-full flex flex-col items-center justify-center">
        <form className="md:w-96 w-80 flex flex-col items-center justify-center">
          <h2 className="text-4xl text-gray-900 font-medium">Sign Up </h2>
          <p className="text-sm text-gray-500/90 mt-3">
            Welcome ! Please Create an account!
          </p>
          <button
            type="button"
            className="relative group overflow-hidden w-full mt-8 h-12 rounded-full border border-gray-300 text-gray-700 flex items-center justify-center gap-3 cursor-pointer"
          >
            {/* Animated Background Fill */}
            <span className="absolute left-0 top-0 h-full w-0 bg-gray-300 transition-all duration-500 group-hover:w-full z-0"></span>

            {/* Content on top */}
            <span className="relative z-10 flex items-center gap-3 transition duration-300 group-hover:text-black">
              <FcGoogle className="text-2xl" />
              <span className="font-medium">Continue with Google</span>
            </span>
          </button>

          <div className="flex items-center gap-4 w-full my-3">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="w-full text-nowrap text-sm text-gray-500/90">
              or sign in with email
            </p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>
          {/* field section */}
          {/* name field */}
          <div className="flex flex-col space-y-5 w-full  max-w-md mx-auto">
            <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <AiOutlineUser className="text-gray-600" />
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              />
            </div>
            {/* phone field */}
            <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <AiOutlinePhone className="text-gray-600" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              />
            </div>
            {/* email */}
            <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <AiOutlineMail className="text-gray-600" />
              <input
                type="email"
                placeholder="Email id"
                className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              />
            </div>
            {/* password */}
            <div className="relative w-full">
              <div className="flex items-center bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 pr-12 gap-2">
                <FaLock className="text-gray-600" />
                <input
                  placeholder="Password"
                  className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                />
              </div>

              {/* Toggle Button */}
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-xl"
              >
                <AiOutlineEye />
              </button>
            </div>
            {/* confirm password */}
            <div className="relative w-full">
              <div className="flex items-center bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 pr-12 gap-2">
                <FaLock className="text-gray-600" />
                <input
                  placeholder="Confirm Password"
                  className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                />
              </div>

              {/* Toggle Button */}
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-xl"
              >
                <AiOutlineEye />
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity cursor-pointer"
          >
            Sign Up
          </button>
          <p className="text-gray-500/90 text-sm mt-4">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="text-indigo-400 hover:underline"
              href="#"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
      {/* image section */}
      <div className="w-full  hidden md:inline-block max-w-2xl pt-10 pr-20">
        <Lottie animationData={registraionImage} loop={true} />
      </div>
    </div>
  );
};

export default SignUp;
