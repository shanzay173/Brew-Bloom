import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { containerVariants } from "../animations";

import cafeImage from "../assets/cafe _ coffee shop.jpeg";
import bakeryImage from "../assets/Fresh Bakery Pastries.jpeg";
import interiorImage from "../assets/interior design.jpeg";
import warmInteriorImage from "../assets/Warm wodden interiors.jpeg";
import coffeeSpreadImage from "../assets/Coffee & Pastry Breakfast Spread.jpeg";
import espressoStationImage from "../assets/Espresso Bar Station.jpeg";

const galleryImages = [
  {
    image: cafeImage,
    alt: "Coffee shop",
    description: "Cozy café corner",
  },
  {
    image: interiorImage,
    alt: "Cafe interior",
    description: "Warm wooden interiors",
  },
  {
    image: espressoStationImage,
    alt: "Coffee cafe",
    description: "Espresso bar setup",
  },
  {
    image: bakeryImage,
    alt: "Coffee cup",
    description: "Fresh pastry moments",
  },
  {
    image: warmInteriorImage,
    alt: "Cafe interior",
    description: "Soft evening ambience",
  },
  {
    image: coffeeSpreadImage,
    alt: "Fresh coffee",
    description: "Breakfast spread",
  },
];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === null ? 0 : (prev + 1) % galleryImages.length
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === null ? galleryImages.length - 1 : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, scale: 0.9 },
  };

  return (
    <section id="gallery" className="bg-[#F9F5F0] py-20 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-300">

        {/* Heading */}
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4"
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
                Our Gallery
              </p>
            </motion.div>

            <motion.h2 
              className="text-[#2A2421] font-serif text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              A Glimpse of Brew & Bloom
            </motion.h2>

            <motion.p 
              className="text-[#6E6864] text-[15px] mt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Take a look at our coffee, treats, and cozy atmosphere.
            </motion.p>
          </div>

          <motion.button
            type="button"
            onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="hidden sm:flex items-center gap-2 border border-[#936138]/40 text-[#2A2421] px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 group"
            whileHover={{ backgroundColor: "#5F3925", color: "white", borderColor: "#5F3925" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            View Gallery
            <motion.div animate={{ x: 0 }} whileHover={{ x: 2 }}>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              onClick={() => handleImageClick(index)}
              className="group relative overflow-hidden rounded-2xl h-55 md:h-65 shadow-sm border border-[#936138]/10 cursor-pointer"
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(147,97,56,0.15)", borderColor: "#936138" }}
            >
              <motion.img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.5 }}
              />

              {/* Hover Overlay with Lightbox Icon */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-[#2A2421]/25 px-4 backdrop-blur-sm"
                initial={{ opacity: 0, backgroundColor: "rgba(42,36,33,0)" }}
                whileHover={{ opacity: 1, backgroundColor: "rgba(42,36,33,0.65)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex flex-col items-center gap-3"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-center text-xs font-medium uppercase tracking-[2px] text-[#fffaf5] drop-shadow-md">
                    {item.description}
                  </p>
                  <motion.div 
                    className="h-8 w-8 rounded-full bg-[#936138]/80 flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "#7b4d2d" }}
                  >
                    <ArrowRight className="w-4 h-4 text-white" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Button */}
        <div className="flex sm:hidden justify-center mt-8">
          <motion.button
            type="button"
            onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="flex items-center gap-2 border border-[#936138]/40 text-[#2A2421] px-6 py-2.5 rounded-full text-xs font-medium transition-all duration-300 group"
            whileHover={{ backgroundColor: "#5F3925", color: "white", borderColor: "#5F3925" }}
            whileTap={{ scale: 0.95 }}
          >
            View Gallery
            <motion.div animate={{ x: 0 }} whileHover={{ x: 2 }}>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.div>
          </motion.button>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/90 p-4 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#caa07d] transition-colors duration-300 z-10"
                aria-label="Close lightbox"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-8 h-8" />
              </motion.button>

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <motion.img
                  key={selectedImageIndex}
                  src={galleryImages[selectedImageIndex].image}
                  alt={galleryImages[selectedImageIndex].alt}
                  className="w-full h-auto object-cover max-h-[80vh]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Image Caption */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <p className="text-lg font-semibold">{galleryImages[selectedImageIndex].description}</p>
                  <p className="text-sm text-gray-300">{selectedImageIndex + 1} of {galleryImages.length}</p>
                </motion.div>
              </div>

              {/* Navigation Arrows */}
              <motion.button
                onClick={handlePrevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-12 text-white hover:text-[#caa07d] transition-all duration-300"
                aria-label="Previous image"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
              </motion.button>

              <motion.button
                onClick={handleNextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-12 text-white hover:text-[#caa07d] transition-all duration-300"
                aria-label="Next image"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
              </motion.button>

              {/* Thumbnail Strip */}
              <motion.div 
                className="mt-6 flex gap-2 overflow-x-auto justify-center pb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {galleryImages.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === selectedImageIndex
                        ? 'border-[#936138] ring-2 ring-[#936138]/50'
                        : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                    whileHover={{ borderColor: "#936138" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={item.image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;