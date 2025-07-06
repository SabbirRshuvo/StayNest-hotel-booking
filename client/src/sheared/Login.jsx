import Lottie from "lottie-react";
import loginAnimation from "../assets/lgoin.json";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex h-[700px] w-full">
      <div className="w-full  hidden md:inline-block max-w-2xl pt-10 pl-20">
        <Lottie animationData={loginAnimation} loop={true} />
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <form className="md:w-96 w-80 flex flex-col items-center justify-center">
          <h2 className="text-4xl text-gray-900 font-medium">Sign in</h2>
          <p className="text-sm text-gray-500/90 mt-3">
            Welcome back! Please sign in to continue
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

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="w-full text-nowrap text-sm text-gray-500/90">
              or sign in with email
            </p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <AiOutlineMail className="text-gray-600" />
            <input
              type="email"
              placeholder="Email id"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
            />
          </div>

          <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <FaLock />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
            <div className="flex items-center gap-2">
              <input className="h-5" type="checkbox" id="checkbox" />
              <label className="text-sm" htmlFor="checkbox">
                Remember me
              </label>
            </div>
            <a className="text-sm underline" href="#">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity cursor-pointer"
          >
            Login
          </button>
          <p className="text-gray-500/90 text-sm mt-4">
            Don’t have an account?{" "}
            <Link
              to="/registar"
              className="text-indigo-400 hover:underline"
              href="#"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
