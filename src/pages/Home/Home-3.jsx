import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import selling from '../../images/variety-construction-materials-laid-out-inspection_997534-23743.jpg';
import machine from '../../images/hq720.jpg';
import rent from '../../images/types-of-formwork.jpg';

export default function Producthighlights() {
  const highlights = [
    {
      title: "Lumber & Timber",
      description: "High-grade lumber for all construction needs.",
      image: selling,
    },
    {
      title: "Concrete & Cement",
      description: "Durable concrete and cement for lasting structures.",
      image: machine,
    },
    {
      title: "Power Tools",
      description: "Powerful tools to enhance productivity.",
      image: rent,
    },
  ];

  return (
    <div className="bg-[#f9fafb] py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Featured Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {highlights.map((cat, index) => (
          <AnimatedCard key={index} image={cat.image} title={cat.title} description={cat.description} delay={index * 0.2} />
        ))}
      </div>
    </div>
  );
}

function AnimatedCard({ image, title, description, delay }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // important for repeating animation
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay },
      });
    } else {
      controls.start({ opacity: 0, scale: 0.9 });
    }
  }, [inView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
    >
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </motion.div>
  );
}
