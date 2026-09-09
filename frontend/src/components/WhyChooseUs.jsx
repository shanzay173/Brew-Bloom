import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animations";
import { Coffee, Heart, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Coffee,
    title: "Premium Beans",
    description:
      "We carefully select high-quality coffee beans for every cup.",
  },
  {
    icon: Heart,
    title: "Made With Love",
    description:
      "Every drink and treat is prepared with passion and attention.",
  },
  {
    icon: Sparkles,
    title: "Fresh Every Day",
    description:
      "Fresh ingredients and freshly brewed coffee, every single day.",
  },
];

const WhyChooseUs = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
    <section className="bg-[#FFFFFF] py-20 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-300">

        {/* Heading */}
        <motion.div 
          className="mx-auto mb-14 max-w-150 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-[#936138] text-[11px] uppercase tracking-[2px] mb-3 font-semibold"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            → Why Choose Us
          </motion.p>

          <motion.h2 
            className="text-[#2A2421] font-serif text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Crafted With Care
          </motion.h2>

          <motion.p 
            className="text-[#6E6864] text-sm leading-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From the beans we choose to the way we serve them,
            every detail is created to make your experience special.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={cardVariants}
                className="group relative text-center border border-[#936138]/15 rounded-2xl p-8 bg-[#F9F5F0]/30 flex flex-col items-center"
                whileHover={{ 
                  y: -12, 
                  backgroundColor: "#F9F5F0",
                  borderColor: "#936138",
                  boxShadow: "0 15px 35px rgba(147,97,56,0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon Container */}
                <motion.div 
                  className="w-16 h-16 mb-6 rounded-2xl bg-[#F9F5F0] border border-[#936138]/20 flex items-center justify-center shadow-sm"
                  whileHover={{ backgroundColor: "#936138", borderColor: "#936138", scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <IconComponent className="w-7 h-7 text-[#936138] group-hover:text-white transition-colors duration-300 stroke-[1.75]" />
                  </motion.div>
                </motion.div>

                <motion.h3 
                  className="text-[#2A2421] font-serif font-bold text-xl mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {reason.title}
                </motion.h3>

                <motion.p 
                  className="text-[#6E6864] text-xs md:text-sm leading-relaxed max-w-70"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {reason.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-[#936138]/15"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center"
            variants={statVariants}
            whileHover={{ scale: 1.1 }}
          >
            <motion.h3 
              className="text-[#936138] font-serif text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              10+
            </motion.h3>
            <p className="text-[#6E6864] text-xs font-medium mt-1 uppercase tracking-wider">
              Years of Experience
            </p>
          </motion.div>

          <motion.div 
            className="text-center"
            variants={statVariants}
            whileHover={{ scale: 1.1 }}
          >
            <motion.h3 
              className="text-[#936138] font-serif text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              50K+
            </motion.h3>
            <p className="text-[#6E6864] text-xs font-medium mt-1 uppercase tracking-wider">
              Happy Customers
            </p>
          </motion.div>

          <motion.div 
            className="text-center"
            variants={statVariants}
            whileHover={{ scale: 1.1 }}
          >
            <motion.h3 
              className="text-[#936138] font-serif text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              25+
            </motion.h3>
            <p className="text-[#6E6864] text-xs font-medium mt-1 uppercase tracking-wider">
              Coffee Varieties
            </p>
          </motion.div>

          <motion.div 
            className="text-center"
            variants={statVariants}
            whileHover={{ scale: 1.1 }}
          >
            <motion.h3 
              className="text-[#936138] font-serif text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              4.9
            </motion.h3>
            <p className="text-[#6E6864] text-xs font-medium mt-1 uppercase tracking-wider">
              Customer Rating
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;