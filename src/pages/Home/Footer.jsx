import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-[#1f2937] text-gray-300 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">BuildRight</h2>
          <p>Your trusted partner for premium construction materials and equipment.</p>
        </div>

        {/* Navigation */}  
        <div>
  <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
  <ul className="space-y-2">
    <li><Link to="/" className="text-gray-300 hover:text-white no-underline">Home</Link></li>
    <li><Link to="/product" className="text-gray-300 hover:text-white no-underline">Product</Link></li>
    <li><Link to="/about" className="text-gray-300 hover:text-white no-underline">About</Link></li>
  </ul>
</div>


        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
          <ul className="space-y-2">
            <li className="text-gray-300 hover:text-white no-underline">Lumber & Timber</li>
            <li className="text-gray-300 hover:text-white no-underline">Concrete & Cement</li>
            <li className="text-gray-300 hover:text-white no-underline">Power Tools</li>
            <li className="text-gray-300 hover:text-white no-underline">Safety Equipment</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2">
            <li className="text-gray-300 hover:text-white no-underline">Email: support@buildright.com</li>
            <li className="text-gray-300 hover:text-white no-underline">Phone: +91 98765 43210</li>
            <li className="text-gray-300 hover:text-white no-underline">Location: Chennai, Tamil Nadu</li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-600" />
      <p className="text-center text-sm">&copy; {new Date().getFullYear()} BuildRight. All rights reserved.</p>
    </footer>
  );
}

