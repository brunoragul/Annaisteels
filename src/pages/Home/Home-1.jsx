import { Link } from "react-router-dom";

export default function UpcomingEvents() {
  return (
    <div className="bg-[#f4fbf7] py-12 px-4 md:px-20">
      <h1 className="text-xxl font-bold text-gray-900 mb-8 ml-20">
        Upcoming Events
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-20 max-w-7xl mx-auto ">
        
        {/* Left Image */}
        <img
          src="./src/images/Construction site with a tower crane construction of residential buildings panoramic view of the construction of skyscrapers landscape with a modern city eps 10 _ Premium AI-generated image (1).jpeg"
          alt="Cement Workshop"
          className="w-full max-w-4xl h-80 md:h-[18rem] lg:h-[30rem] object-cover rounded-lg"
        />

        {/* Right Content */}
        <div className="flex flex-col justify-between text-center md:text-left w-full ">
          <div>
            <h1 className="text-3xl md:text-4xl pt-10 font-semibold mb-4">
              Cement Workshop
            </h1>
            <p className="text-base md:text-lg text-gray-600 mt-4 md:mt-8 max-w-md mx-auto md:mx-0">
              Join our upcoming workshop to learn about the latest techniques in cement application...
            </p>
          </div>

          <div className="mt-6 md:mt-12">
            <Link to="/About">
            <button className="bg-blue-300 text-green-900 font-semibold px-20 py-4 rounded-full hover:bg-blue-500 transition duration-300">
              Register
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
