import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { containerVariantsLarge, itemVariantsLarge } from '../animations';
import heroBackground from '../assets/banner (2).jpeg';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <section 
      id="home" 
      className="relative flex min-h-140 w-full items-center justify-start overflow-hidden bg-[#141414] px-5 py-20 text-[#f7f3ed] sm:px-8 md:min-h-175 md:px-16 md:py-28"
    >
      <motion.img
        src={heroBackground}
        alt="Freshly brewed coffee in a cozy cafe"
        className="absolute inset-0 h-full w-full object-cover object-[center_65%] brightness-[0.72] contrast-110"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#141414]/95 via-[#141414]/70 to-[#141414]/30" />
      
      {/* Cinematic accent line */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#936138]/40 to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Cinematic glow effect */}
      <motion.div
        className="absolute inset-0 bg-radial-gradient pointer-events-none"
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [0.8, 1, 0.8]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        className="relative z-10 flex max-w-xl flex-col items-start justify-center text-left"
        variants={containerVariantsLarge}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          variants={itemVariantsLarge}
          className="mb-2 inline-flex rounded-full border border-[#b9987a]/60 bg-[#5F3925]/40 px-3 py-1 text-[10px] font-medium italic tracking-[0.18em] text-[#efe1d4] uppercase md:text-xs backdrop-blur-sm hover:bg-[#5F3925]/60 transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.05, borderColor: "#936138" }}
          whileTap={{ scale: 0.95 }}
        >
          Good Coffee, Good Mood ✨
        </motion.span>

        <motion.h1 
          variants={itemVariantsLarge}
          className="mb-4 max-w-[15ch] font-serif text-3xl font-bold leading-[0.95] tracking-tight text-[#fffaf5] sm:text-5xl md:text-6xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
        >
          Brewed for You, Bloomed with Passion.
        </motion.h1>

        <motion.p 
          variants={itemVariantsLarge}
          className="mb-8 max-w-lg text-sm font-light leading-relaxed tracking-wide text-[#f7f3ed]/95 md:text-base drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
        >
          Every cup is a blend of premium beans, crafted with care to bring warmth to your day.
        </motion.p>

        <motion.div 
          variants={itemVariantsLarge}
          className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
        >
          <motion.a
            href="/menu"
            onMouseEnter={() => setIsHovered("menu")}
            onMouseLeave={() => setIsHovered(null)}
            className="w-full rounded-full bg-linear-to-r from-[#5F3925] to-[#4c2e1d] px-5 py-3 text-center text-sm font-semibold text-[#fffaf5] shadow-[0_14px_30px_rgba(95,57,37,0.45)] transition-all duration-300 sm:w-auto sm:px-6 group cursor-pointer"
            whileHover={{ y: -4, boxShadow: "0 20px 50px rgba(95,57,37,0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="inline-flex items-center gap-2">
              Explore Menu
              <motion.span 
                animate={{ x: isHovered === "menu" ? 4 : 0 }}
                transition={{ duration: 0.3 }}
              >
                &gt;
              </motion.span>
            </span>
          </motion.a>

          <motion.a
            href="/#reservation"
            onMouseEnter={() => setIsHovered("reserve")}
            onMouseLeave={() => setIsHovered(null)}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-[#f7f3ed]/60 bg-white/10 px-5 py-3 text-sm font-semibold text-[#fffaf5] backdrop-blur-md transition-all duration-300 sm:w-auto sm:px-6 group cursor-pointer"
            whileHover={{ 
              y: -4, 
              backgroundColor: "rgba(255,255,255,0.2)",
              borderColor: "#936138",
              boxShadow: "0 20px 40px rgba(147,97,56,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve a Table
            <motion.span 
              animate={{ x: isHovered === "reserve" ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▶
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;