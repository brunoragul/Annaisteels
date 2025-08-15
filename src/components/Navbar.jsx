import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../images/lumberImage.jpg';
import Cart from '../images/add-to-cart.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent menu from staying open if screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-gray-600 py-4 shadow relative z-50">
      <div className="flex items-center justify-between px-4">
        {/* Left - Logo */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="logo" className="w-12 h-12" />
          <h1 className="text-xxl font-bold text-white">Annai Steels</h1>
        </div>

        {/* Hamburger - Mobile Only */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          {["Home", "Product", "About"].map((text) => (
            <Link
              key={text}
              to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              className="relative text-xl text-Bold text-white no-underline pb-1 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-200 hover:before:w-full hover:before:bg-blue-500"
            >
              {text}
            </Link>
          ))}
        </div>

        {/* Desktop Search & Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-4 py-1 rounded-full focus:outline-none"
            />
            <span className="absolute left-2 top-1.5 text-sm">🔍</span>
          </div>
          <img src={Cart} alt="cart" className="w-8 h-8" />
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-neutral-800 text-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6 text-lg">
          <button
            className="self-end text-2xl text-white"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          {["Home", "Product", "About"].map((text) => (
            <Link
              key={text}
              to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              className="inline-block relative text-white no-underline pb-1
             before:content-[''] before:absolute before:left-0 before:bottom-0
             before:h-[2px] before:w-0 before:bg-white
             before:transition-all before:duration-200 
             hover:before:w-full hover:before:bg-blue-500"  
              onClick={() => setIsOpen(false)}
            >
              {text}
            </Link>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}
