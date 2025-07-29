import { MdEmail } from "react-icons/md";
import Title from "./Title";

const Newsletter = () => {
  return (
    <div className="bg-gray-200 py-24  px-4 sm:px-8 md:px-16 lg:px-24 rounded-lg shadow-lg">
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
