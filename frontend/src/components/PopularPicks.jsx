import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animations";
import { Heart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import cappuccinoImage from "../assets/Cappuccino.jpeg";
import latteImage from "../assets/Cinnamon Spice Latte.jpeg";
import mochaImage from "../assets/Mocha with Whipped Cream.jpeg";
import pastryImage from "../assets/Coffee & Pastry Breakfast Spread.jpeg";
import espressoImage from "../assets/Hot Cappuccino.jpeg";
import caramelImage from "../assets/Frozen Bean Caramel Macchiato.jpeg";
import muffinImage from "../assets/Blueberry Muffins.jpeg";
import donutImage from "../assets/Chocolate glazed donuts.jpeg";

const products = [
  {
    id: 1,
    name: "Cappuccino",
    description: "Rich espresso with steamed milk and a smooth, creamy finish.",
    price: "$3.50",
    image: cappuccinoImage,
  },
  {
    id: 2,
    name: "Cinnamon Spice Latte",
    description: "Warm spiced notes blended into a comforting café classic.",
    price: "$3.80",
    image: latteImage,
  },
  {
    id: 3,
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk – a chocolate lover's dream.",
    price: "$4.20",
    image: mochaImage,
  },
  {
    id: 4,
    name: "Coffee & Pastry Breakfast Spread",
    description: "A perfect morning duo of handcrafted coffee and fresh bakery bites.",
    price: "$2.80",
    image: pastryImage,
  },
  {
    id: 5,
    name: "Hot Cappuccino",
    description: "Bold, intense shot of pure rich coffee for an extra morning boost.",
    price: "$2.90",
    image: espressoImage,
  },
  {
    id: 6,
    name: "Frozen Bean Caramel Macchiato",
    description: "Freshly steamed milk with vanilla-flavored syrup marked with espresso.",
    price: "$4.50",
    image: caramelImage,
  },
  {
    id: 7,
    name: "Blueberry Muffins",
    description: "Soft, fluffy, and baked with juicy blueberry bursts in every bite.",
    price: "$4.80",
    image: muffinImage,
  },
  {
    id: 8,
    name: "Chocolate Glazed Donuts",
    description: "Rich, dense chocolate brownie topped with roasted walnuts.",
    price: "$3.20",
    image: donutImage,
  },
];

const PopularPicks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState({});

  const itemsPerPage = 4;
  const maxIndex = products.length - itemsPerPage;

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="shop" className="bg-[#F9F5F0] py-16 px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="mx-auto max-w-300">
        {/* Section Header */}
        <motion.div 
          className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.div 
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-[#936138] text-xs">→</span>
              <p className="text-[#936138] text-[11px] uppercase tracking-widest font-medium">
                Our Favorites
              </p>
            </motion.div>

            <motion.h2 
              className="text-[#2A2421] font-serif text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Popular Picks
            </motion.h2>

            <motion.p 
              className="text-[#6E6864] text-sm mt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Handpicked favorites, loved by everyone.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              to="/menu"
              className="hidden sm:flex items-center gap-2 border border-[#936138]/30 rounded-full px-5 py-2 text-xs font-medium text-[#2A2421] transition-all"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span className="block">View Full Menu</span>
              </motion.div>
              <motion.div animate={{ x: 0 }} whileHover={{ x: 4 }}>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Carousel Wrapper with Arrows */}
        <div className="relative flex items-center">
          {/* Left Arrow Button */}
          <motion.button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute -left-3 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-[#936138]/20 bg-white text-[#2A2421] shadow-md transition-all duration-300 md:-left-5 md:flex"
            whileHover={{ backgroundColor: "#936138", color: "white", scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>

          {/* Sliding Track Window */}
          <div className="w-full overflow-hidden py-3">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              {products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-3"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#936138]/10 flex flex-col justify-between h-full"
                    whileHover={{ 
                      y: -8, 
                      boxShadow: "0 20px 40px rgba(147,97,56,0.15)",
                      borderColor: "#936138"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image Container */}
                    <div className="relative h-55 overflow-hidden group">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                      />

                      {/* Overlay on hover */}
                      <motion.div 
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/20"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Heart Button */}
                      <motion.button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-3 right-3 w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
                        whileHover={{ scale: 1.2, backgroundColor: "rgba(0,0,0,0.7)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <motion.div
                          animate={{ scale: favorites[product.id] ? 1.1 : 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <Heart
                            className={`w-4 h-4 stroke-2 transition-colors ${
                              favorites[product.id]
                                ? "fill-[#936138] text-[#936138]"
                                : "text-white"
                            }`}
                          />
                        </motion.div>
                      </motion.button>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <motion.h3 
                          className="text-[#2A2421] font-serif font-bold text-base mb-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          viewport={{ once: true }}
                        >
                          {product.name}
                        </motion.h3>

                        <motion.p 
                          className="text-[#6E6864] text-xs leading-relaxed min-h-9"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          {product.description}
                        </motion.p>
                      </div>

                      {/* Price */}
                      <div className="pt-4 mt-2">
                        <motion.span 
                          className="text-[#2A2421] font-bold text-base"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          {product.price}
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow Button */}
          <motion.button
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute -right-3 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-[#936138]/20 bg-white text-[#2A2421] shadow-md transition-all duration-300 md:-right-5 md:flex"
            whileHover={{ backgroundColor: "#936138", color: "white", scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Mobile View Full Menu Button */}
        <div className="flex sm:hidden justify-center mt-8">
          <Link
            to="/menu"
            className="flex items-center gap-2 border border-[#936138]/30 rounded-full px-6 py-2.5 text-xs font-medium text-[#2A2421] transition-all"
          >
            View Full Menu
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularPicks;