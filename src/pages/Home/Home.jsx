 import  UpcomingEvents from "./Home-1";
import FeaturedCategories from "./Home-2";
import Producthighlights from "./Home-3"; 
import ReviewSection from "./ReviewSection";
import ReviewIntro from "./reviewIntro";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#f4fbf7] min-h-screen p-4">
  {/* Top Image */}
  <div className="flex justify-center py-12">
    <img
      src="./src/images/pexels-purvesh-photography-34809134-32826199.jpg"
      className="rounded-xl w-full max-w-7xl h-64 md:h-96 object-cover"
      alt="Main Banner"
    />
  </div>

  {/* Grid Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto py-12">
    
    {/* Left Image */}
    <div className="flex justify-center">
      <img
        src="./src/images/pexels-500photos-com-15338-93400.jpg"
        alt="Construction site"
        className="w-full max-w-4xl h-80 md:h-[28rem] lg:h-[34rem] object-cover rounded-xl"
      />
    </div>

    {/* Right Content */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
        Your Partner in <br /> Building Success
      </h2>
      <p className="text-gray-700 mb-6 text-lg">
        BuildRight Supply offers a comprehensive range of high-quality construction materials and tools, ensuring your projects are completed efficiently and effectively. Explore our extensive catalog and discover the difference quality makes.
      </p>
    
      <Link to="/product">
        <button className="bg-blue-300 text-green-900 font-semibold px-16 py-4 md:px-24 md:py-5 lg:px-32 lg:py-6 rounded-full shadow hover:bg-blue-400 transition duration-300">
          Shop Now
        </button>
      </Link>
    </div>
  </div>
<UpcomingEvents />
<FeaturedCategories />
<Producthighlights />
<ReviewIntro />
<ReviewSection />
<Footer />
</div>

  );
}
