import { MdEmail } from "react-icons/md";
import Title from "./Title";

const Newsletter = () => {
  return (
    // <div className="flex flex-col items-center bg-gray-700 text-white max-w-7xl mx-auto h-[300px] rounded-2xl p-8 md:p-12 lg:p-16 my-4">
    //   <div className="flex flex-col justify-center items-center text-center">
    //     <Title
    //       title="Stay Inspired"
    //       subTitle="Join our newsletter and be the first to discover new updates,
    //       exclusive offers, and inspiration."
    //     />
    //   </div>
    //   <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
    //     <input
    //       type="text"
    //       className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full"
    //       placeholder="Enter your email"
    //     />
    //     <button className="flex items-center justify-center gap-2 group bg-white text-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all cursor-pointer">
    //       Subscribe
    //       <img
    //         src={assets.arrowIcon}
    //         alt="arrow-icon"
    //         className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
    //       />
    //     </button>
    //   </div>
    //   <p className="text-gray-500 mt-6 text-xs text-center">
    //     By subscribing, you agree to our Privacy Policy and consent to receive
    //     updates.
    //   </p>
    // </div>
    <div className="bg-gray-200 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-gray-800 mb-4">
          <Title
            title="Stay Inspired"
            subTitle="Join our newsletter and be the first to discover new updates,
          exclusive offers, and inspiration."
          />
        </div>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-auto max-w-sm"
            required
          />
          <button type="submit" className="btn btn-primary w-full sm:w-auto">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
