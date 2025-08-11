// components/FeaturedCategories.jsx
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import lumber from '../../images/shutterstock_2082187936.jpg';
import ramco from '../../images/ramco-cement-1000x1000.jpg';
import rod from '../../images/image-243 (1).jpg';
import brick from '../../images/bricks.jpg';

// ✅ Reusable Animated Card
function AnimatedCard({ image, title, description }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover transition-transform duration-300 transform hover:scale-105 hover:brightness-110 rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </motion.div>
  );
}

// ✅ Main Component
export default function FeaturedCategories() {
  const categories = [
    {
      title: "Lumber & Timber",
      description: "High-grade lumber for all construction needs.",
      image: lumber,
    },
    {
      title: "Concrete & Cement",
      description: "Durable concrete and cement for lasting structures.",
      image: ramco,
    },
    {
      title: "Power Tools",
      description: "Powerful tools to enhance productivity.",
      image: rod,
    },
    {
      title: "Safety Equipment",
      description: "Essential safety gear for every job site.",
      image: brick,
    },
  ];

  return (
    <div className="bg-[#f9fafb] py-12 px-6 md:px-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {categories.map((cat, index) => (
          <AnimatedCard
            key={index}
            image={cat.image}
            title={cat.title}
            description={cat.description}
          />
        ))}
      </div>
    </div>
  );
}
