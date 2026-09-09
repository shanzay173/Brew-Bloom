import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animations";

const features = [
  {
    icon: "♨",
    title: "Quality Coffee",
    description:
      "We use only the finest beans sourced from around the world.",
  },
  {
    icon: "⌁",
    title: "Freshly Brewed",
    description:
      "Brewed fresh every time to ensure the best taste and aroma.",
  },
  {
    icon: "▱",
    title: "Delicious Treats",
    description:
      "Pair your coffee with our handmade pastries and desserts.",
  },
  {
    icon: "◔",
    title: "Cozy Ambience",
    description:
      "A perfect place to relax, work, or catch up with friends.",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative z-20 -mt-11! px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="mx-auto max-w-257.5 overflow-hidden rounded-[22px] border border-[#eadfd4] bg-[#fffdfb] shadow-[0_18px_42px_rgba(25,15,10,0.12)] backdrop-blur-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`flex items-start gap-4 px-5 py-6 sm:px-6 lg:px-5 group transition-all duration-300 ${
                index !== 3 ? "border-b border-[#eee5dc] sm:border-b-0 sm:border-r" : ""
              }`}
              whileHover={{ backgroundColor: "rgba(95,57,37,0.03)" }}
            >
              <motion.div 
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#5F3925]/8 text-2xl font-light leading-none text-[#936138] group-hover:bg-[#5F3925]/15 transition-all duration-300"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {feature.icon}
              </motion.div>

              <div className="min-w-0">
                <motion.h3 
                  className="mb-1 text-sm font-serif font-semibold text-[#2A2421]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>

                <motion.p 
                  className="text-[11px] leading-5 text-[#6E6864]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;