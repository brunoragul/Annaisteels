import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addReview } from "../reviews/data/reviewStorage";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating) {
      setError("⭐ Star rating is required.");
      return;
    }

    if (!name.trim() || !text.trim()) {
      setError("Name and review text are required.");
      return;
    }

    const newReview = {
      name,
      text,
      rating,
      date: new Date().toISOString(),
    };

    addReview(newReview);
    setName("");
    setText("");
    setRating(null);
    navigate("/");

  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Share Your Experience ✍️
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-xl mx-auto space-y-6 border-t-4 border-blue-500"
      >
        {error && (
          <p
            className={`text-sm font-medium ${
              error.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {error}
          </p>
        )}

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Review
          </label>
          <textarea
            placeholder="Write your feedback here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Star Rating
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setRating(star)}
                className={`text-2xl transition transform hover:scale-125 ${
                  star <= rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}
