import { useEffect, useState, useRef } from "react";
import { getReviews } from "../../reviews/data/reviewStorage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ReviewSection() {
  const [reviews, setReviews] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const allReviews = getReviews();
    const latestSix = allReviews.slice(-6).reverse(); // Show last 6
    setReviews(latestSix);
  }, []);

  const handleSlideClick = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleNavClick = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  if (!reviews.length) return null;

  return (
    <div className="bg-gray-50 py-12 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        User Experience 🌟
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} onClick={handleSlideClick}>
            <div className="bg-white shadow-xl rounded-xl p-6 border-t-4 border-blue-500 h-full cursor-pointer hover:scale-105 transition duration-300">
              <h3 className="text-lg font-semibold text-blue-800">{review.name}</h3>
              <p className="text-sm text-gray-600 italic mb-2">
                {new Date(review.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700 mb-4">{review.text}</p>
              <div className="text-yellow-400 text-lg">
                {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div
          className="swiper-button-prev text-blue-600"
          onClick={handleNavClick}
        ></div>
        <div
          className="swiper-button-next text-blue-600"
          onClick={handleNavClick}
        ></div>
      </Swiper>
    </div>
  );
}
