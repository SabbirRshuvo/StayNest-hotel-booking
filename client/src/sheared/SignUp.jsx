import Lottie from "lottie-react";
import registraionImage from "../assets/signUp.json";
import {
  AiOutlineCamera,
  AiOutlineEye,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUser,
} from "react-icons/ai";
import { FaEyeSlash, FaLock } from "react-icons/fa";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../provider/AuthContext";
import Swal from "sweetalert2";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = async (data) => {
    const { name, email, password, image } = data;
    try {
      await createUser(email, password);

      const formData = new FormData();
      formData.append("image", image[0]);

      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_ImageBBAPiKey
        }`,
        formData
      );
      const imageUrl = res.data.data.url;
      console.log("image uploaded", imageUrl);

      await updateUserProfile(name, imageUrl);
      console.log("profile updated");

      // databased data adding section
      Swal.fire({
        icon: "success",
        title: "SignUp Successful",
        timer: 1500,
        showConfirmButton: false,
      });
      reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "SignUp Failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="flex h-[700px] w-full">
      <div className="w-full  hidden md:inline-block max-w-2xl pt-20 pr-20">
        <Lottie animationData={registraionImage} loop={true} />
      </div>
      {/* form section */}
      <div className="w-full flex flex-col items-center justify-center mt-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-96 w-80 flex flex-col items-center justify-center"
        >
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
          {/* form filed section */}
          <div className="flex flex-col space-y-5 w-full  max-w-md mx-auto">
            {/* name field */}
            {errors.name && (
              <p className="text-red-500 text-sm mb-1">{errors.name.message}</p>
            )}
            <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <AiOutlineUser className="text-gray-600" />
              <input
                type="text"
                placeholder="Full Name"
                {...register("name", { required: "Full Name is required" })}
                className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              />
            </div>

            {/* contact field */}
            {errors.phone && (
              <p className="text-red-500 text-sm mb-1">
                {errors.phone.message}
              </p>
            )}
            <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <AiOutlinePhone className="text-gray-600" />
              <input
                type="tel"
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: {
                    value: 11,
                    message: "Phone must be 11 digits",
                  },
                })}
                className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              />
            </div>
            {/* email */}
            {errors.email && (
              <p className="text-red-500 text-sm mb-1">
                {errors.email.message}
              </p>
            )}
            <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <AiOutlineMail className="text-gray-600" />
              <input
                type="email"
                placeholder="Email id"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              />
            </div>
            {/* password */}
            {errors.password && (
              <p className="text-red-500 text-sm mb-1">
                {errors.password.message}
              </p>
            )}
            <div className="relative w-full">
              <div className="flex items-center bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 pr-12 gap-2">
                <FaLock className="text-gray-600" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message:
                        "Password must be at least 6 characters or bigger",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[!@#$&*]).{6,}$/,
                      message: "Use 1 capital & 1 special character (!@#$&*)",
                    },
                  })}
                  className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                />
              </div>

              {/* Toggle Button */}
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-xl cursor-pointer"
              >
                {showPassword ? <AiOutlineEye /> : <FaEyeSlash />}
              </button>
            </div>

            {/* upload section */}
            {errors.image && (
              <p className="text-red-500 text-sm mb-1">
                {errors.image.message}
              </p>
            )}
            <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <AiOutlineCamera />
              <input
                {...register("image", {
                  required: "Image is required",
                })}
                type="file"
                className="file-input file-input-ghost "
              />
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
    </div>
  );
};

export default SignUp;
