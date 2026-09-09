import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animations";
import { Coffee, Smile, Store } from "lucide-react";

// Exact file name space ke saath match karein:
import cafeImage from "../assets/cafe _ coffee shop.jpeg"; 

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="bg-[#F9F5F0] py-16 px-6 md:px-12 lg:px-20">
      <motion.div 
        className="mx-auto grid max-w-300 grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        
        {/* Left Side: Image */}
        <motion.div 
          className="w-full"
          variants={itemVariants}
        >
          <motion.img
            src={cafeImage}
            alt="Brew & Bloom Interior"
            className="w-full h-112.5 object-cover rounded-2xl shadow-sm border border-[#936138]/15"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          className="flex flex-col items-start justify-center"
          variants={containerVariants}
        >
          
          {/* Subtitle */}
          <motion.div 
            className="flex items-center gap-2 mb-3"
            variants={itemVariants}
          >
            <span className="text-[#936138] text-sm">→</span>
            <span className="text-[#936138] text-xs font-semibold tracking-wider uppercase">
              About Us
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            className="text-[#2A2421] font-serif text-3xl md:text-4xl leading-tight font-bold mb-5"
            variants={itemVariants}
          >
            More Than Just <br /> Great Coffee
          </motion.h2>

          {/* Paragraph */}
          <motion.p 
            className="text-[#6E6864] text-[15px] leading-relaxed mb-8 max-w-125"
            variants={itemVariants}
          >
            At Brew & Bloom, we believe coffee brings people together. Our mission
            is to create moments of joy through exceptional coffee, friendly
            service, and a cozy atmosphere.
          </motion.p>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-3 gap-6 w-full max-w-120 mb-8 pt-2"
            variants={containerVariants}
          >
            
            <motion.div 
              className="flex flex-col items-center text-center"
              variants={statVariants}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Coffee className="w-7 h-7 text-[#936138] mb-2 stroke-[1.5]" />
              </motion.div>
              <motion.span 
                className="font-bold text-[#2A2421] text-base md:text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                100%
              </motion.span>
              <span className="text-[#6E6864] text-xs mt-0.5">Quality Beans</span>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center border-x border-[#936138]/20 px-2"
              variants={statVariants}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Smile className="w-7 h-7 text-[#936138] mb-2 stroke-[1.5]" />
              </motion.div>
              <motion.span 
                className="font-bold text-[#2A2421] text-base md:text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                5000+
              </motion.span>
              <span className="text-[#6E6864] text-xs mt-0.5">Happy Customers</span>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center"
              variants={statVariants}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Store className="w-7 h-7 text-[#936138] mb-2 stroke-[1.5]" />
              </motion.div>
              <motion.span 
                className="font-bold text-[#2A2421] text-base md:text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                3
              </motion.span>
              <span className="text-[#6E6864] text-xs mt-0.5">Branches</span>
            </motion.div>

          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
};

export default AboutSection;