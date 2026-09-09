import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animations";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Customer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    text: "The best coffee in town! The ambience is cozy and the staff is so friendly.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Freelance Designer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    text: "Brew & Bloom is my go-to place for a perfect coffee and a peaceful work environment.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Coffee Enthusiast",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    text: "Amazing flavors, beautiful presentation, and great vibes all around!",
    rating: 5,
  },
];

const Testimonials = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="testimonials" className="bg-[#F9F5F0] px-6 py-20 md:px-10 lg:px-16">
      <motion.div 
        className="mx-auto max-w-300 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="mb-2 text-[11px] font-medium uppercase tracking-[2px] text-[#936138]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          → Testimonials
        </motion.p>

        <motion.h2 
          className="mb-3 font-serif text-3xl font-bold text-[#2A2421] md:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          What Our Customers Say
        </motion.h2>

        <motion.p 
          className="mx-auto mb-12 max-w-125 text-sm text-[#6E6864]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Real stories from real coffee lovers.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 gap-6 text-left md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col justify-between rounded-[22px] border border-[#936138]/15 bg-white p-6 shadow-[0_18px_40px_rgba(25,14,10,0.06)]"
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 45px rgba(25,14,10,0.12)",
                borderColor: "#936138"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="mb-6 text-sm leading-relaxed text-[#6E6864] italic">
                  "{item.text}"
                </p>
              </motion.div>

              <motion.div 
                className="flex items-center justify-between border-t border-[#936138]/10 pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <motion.img
                    src={item.avatar}
                    alt={item.name}
                    className="h-10 w-10 rounded-full border border-[#936138]/20 object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#2A2421]">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-[#6E6864]">
                      {item.role}
                    </p>
                  </div>
                </div>

                <motion.div 
                  className="flex text-xs text-[#936138]"
                  whileHover={{ scale: 1.15 }}
                >
                  {"★".repeat(item.rating)}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Testimonials;