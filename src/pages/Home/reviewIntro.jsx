// src/pages/Home/ReviewIntro.jsx
import { Link } from "react-router-dom";

export default function ReviewIntro() {
  return (
    <div className="text-center py-10 px-4 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
        Your Voice Matters! 🗣️
      </h2>
      <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
        Your feedback helps us build better – not just structures, but trust. Share your thoughts about our building products and help others make strong, confident choices.
      </p>
      <Link to="/ReviewForm">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold">
          Add Your Review
        </button>
      </Link>
    </div>
  );
}
