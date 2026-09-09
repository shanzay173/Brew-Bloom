import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animations";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.footer 
      id="contact" 
      className="border-t border-[#936138]/20 bg-[#1c1613] px-6 py-16 text-xs text-[#d9c7b7] md:px-10 lg:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="mx-auto grid max-w-300 grid-cols-1 gap-10 border-b border-[#936138]/20 pb-12 md:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="space-y-4" variants={itemVariants}>
          <h3 className="font-serif text-xl font-bold tracking-wide text-[#f9f2eb]">
            Brew & Bloom
          </h3>
          <p className="font-light leading-relaxed text-[#f1e7df]">
            Brew & Bloom is more than just a café. It's a space to relax, connect, and enjoy exceptional coffee crafted with passion.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#f9f2eb]">Quick Links</h4>
          <ul className="space-y-2.5 font-medium">
            <li>
              <motion.a 
                href="/" 
                className="flex items-center gap-1.5 text-[#f3e3d6] transition hover:text-[#c79a74]"
                whileHover={{ x: 4 }}
              >
                <span className="text-[#936138]">→</span> Home
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="/menu" 
                className="flex items-center gap-1.5 text-[#f3e3d6] transition hover:text-[#c79a74]"
                whileHover={{ x: 4 }}
              >
                <span className="text-[#936138]">→</span> Menu
              </motion.a>
            </li>
            <li>
              <motion.button
                type="button"
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    window.location.href = '/#about';
                    return;
                  }
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="flex items-center gap-1.5 text-[#f3e3d6] transition hover:text-[#c79a74]"
                whileHover={{ x: 4 }}
              >
                <span className="text-[#936138]">→</span> About Us
              </motion.button>
            </li>
            <li>
              <motion.button
                type="button"
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    window.location.href = '/#gallery';
                    return;
                  }
                  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="flex items-center gap-1.5 text-[#f3e3d6] transition hover:text-[#c79a74]"
                whileHover={{ x: 4 }}
              >
                <span className="text-[#936138]">→</span> Gallery
              </motion.button>
            </li>
            <li>
              <motion.a 
                href="/contact" 
                className="flex items-center gap-1.5 text-[#f3e3d6] transition hover:text-[#c79a74]"
                whileHover={{ x: 4 }}
              >
                <span className="text-[#936138]">→</span> Contact
              </motion.a>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#f9f2eb]">Customer Service</h4>
          <ul className="space-y-2.5 font-medium text-[#f3e3d6]">
            <li>
              <motion.a 
                href="/#reservation" 
                className="transition hover:text-[#c79a74]"
                whileHover={{ x: 4 }}
              >
                Reservations
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="tel:+12345678900" 
                className="transition hover:text-[#c79a74]"
                whileHover={{ x: 4 }}
              >
                Call Us
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="mailto:hello@brewandbloom.com" 
                className="transition hover:text-[#c79a74]"
                whileHover={{ x: 4 }}
              >
                Email Us
              </motion.a>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#f9f2eb]">Contact Us</h4>
          <ul className="space-y-3 font-light text-[#f3e3d6]">
            <li className="flex items-start gap-2.5">
              <motion.div whileHover={{ scale: 1.2 }}>
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#936138]" />
              </motion.div>
              <span>123 Coffee Street, Brewville, CA 90210</span>
            </li>
            <li className="flex items-center gap-2.5">
              <motion.div whileHover={{ scale: 1.2 }}>
                <Phone className="h-4 w-4 shrink-0 text-[#936138]" />
              </motion.div>
              <span>+1 (234) 567-8900</span>
            </li>
            <li className="flex items-center gap-2.5">
              <motion.div whileHover={{ scale: 1.2 }}>
                <Mail className="h-4 w-4 shrink-0 text-[#936138]" />
              </motion.div>
              <span>hello@brewandbloom.com</span>
            </li>
            <li className="flex items-start gap-2.5">
              <motion.div whileHover={{ scale: 1.2 }}>
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#936138]" />
              </motion.div>
              <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="mx-auto flex max-w-300 flex-col items-center justify-between gap-4 pt-8 text-[#d7c6b7] sm:flex-row">
        <p>© 2026 Brew & Bloom Coffee Cafe. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;