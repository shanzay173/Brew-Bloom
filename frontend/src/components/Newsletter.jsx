import React, { useState } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animations";
import { ArrowRight, Coffee, CheckCircle, AlertCircle } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [offerClaimed, setOfferClaimed] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setOfferClaimed(false);

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubscribed(true);
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleClaimOffer = () => {
    if (!isSubscribed) {
      setError("Please subscribe with a valid email first");
      return;
    }

    setOfferClaimed(true);
    setSubmitted(true);
    setError("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-[#F9F5F0] px-6 py-16 md:px-10 lg:px-16">
      <motion.div 
        className="mx-auto max-w-300 space-y-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="relative mx-auto w-full max-w-300 overflow-hidden rounded-[30px] bg-[#140F0D] shadow-[0_20px_60px_rgba(25,14,10,0.35)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ boxShadow: "0 30px 70px rgba(25,14,10,0.5)" }}
        >
          <motion.div
            className="absolute inset-0 z-0 scale-105 bg-cover bg-center opacity-90"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1541167760496-1628856ab772?w=1200&auto=format&fit=crop')`,
            }}
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 z-10 bg-linear-to-r from-[#140F0D] via-[#140F0D]/80 to-[#140F0D]/20" />

          <motion.div 
            className="relative z-20 flex flex-col items-center justify-between gap-6 p-6 md:flex-row md:p-8 lg:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-175 text-center md:text-left">
              <motion.div 
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d7c0ae]/70 bg-[#936138]/60 px-3.5 py-2 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity }}>
                  <Coffee className="h-3.5 w-3.5 text-[#fffaf5]" />
                </motion.div>
                <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#fffaf5]">
                  Special Offer
                </span>
              </motion.div>

              <motion.h3 
                className="mb-3 font-serif text-3xl font-extrabold tracking-tight text-[#fffaf5] md:text-5xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Weekend Treat
              </motion.h3>

              <motion.p 
                className="mb-6 max-w-155 text-sm font-medium leading-relaxed text-[#fff7f2] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-base"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Get 20% off on all beverages every weekend. Because good days start with great coffee!
              </motion.p>

              <motion.button
                type="button"
                onClick={handleClaimOffer}
                disabled={!isSubscribed}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-[0_12px_25px_rgba(147,97,56,0.35)] transition-all duration-300 group ${
                  isSubscribed
                    ? "bg-linear-to-r from-[#936138] to-[#7e512e] text-[#fffaf5] hover:shadow-lg hover:shadow-[#936138]/50"
                    : "cursor-not-allowed bg-[#d9c7b7] text-[#6e6864] opacity-70"
                }`}
                whileHover={isSubscribed ? { scale: 1.08 } : { scale: 1 }}
                whileTap={isSubscribed ? { scale: 0.95 } : { scale: 1 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {isSubscribed ? "Claim Offer" : "Subscribe First"}
                {isSubscribed && (
                  <motion.div animate={{ x: 0 }} whileHover={{ x: 4 }}>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300" />
                  </motion.div>
                )}
              </motion.button>
            </div>

            <motion.div 
              className="flex shrink-0 items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-[#f7e4d1]/30 bg-linear-to-br from-[#a77048] to-[#6f452c] text-center text-[#fffaf5] shadow-[0_18px_40px_rgba(0,0,0,0.30)] md:h-40 md:w-40"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div>
                  <span className="block font-serif text-4xl font-extrabold leading-none text-[#fffaf5] md:text-6xl">20%</span>
                  <span className="mt-2 block text-[10px] font-bold uppercase tracking-[3px] text-[#fffaf5] md:text-[11px]">OFF</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mx-auto max-w-150 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="mb-2 text-[11px] font-semibold uppercase tracking-[2px] text-[#936138]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            → Stay Connected
          </motion.p>
          <motion.h2 
            className="mb-3 font-serif text-3xl font-bold text-[#2A2421] md:text-4xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Subscribe to Our Newsletter
          </motion.h2>
          <motion.p 
            className="mb-8 text-sm text-[#4d413d]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get the latest updates, special offers, and coffee tips straight to your inbox.
          </motion.p>

          {submitted ? (
            <motion.div 
              className="mx-auto flex max-w-120 flex-col items-center justify-center gap-3 rounded-xl bg-green-50 p-4 border border-green-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </motion.div>
              <p className="text-sm font-semibold text-green-700">
                {offerClaimed
                  ? "✨ Offer claimed successfully! Your discount is ready."
                  : "✨ Thank you for subscribing! Check your inbox."}
              </p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit} 
              className="mx-auto flex max-w-120 flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#2A2421] placeholder-[#6E6864]/60 shadow-sm transition-all duration-300 focus:outline-none ${
                    error
                      ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                      : "border-[#936138]/20 focus:border-[#936138] focus:ring-2 focus:ring-[#d4a373]/30"
                  }`}
                  whileFocus={{ scale: 1.02 }}
                />
                {error && (
                  <motion.div 
                    className="mt-2 flex items-center gap-2 text-red-600 text-xs font-medium"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="h-3.5 w-3.5" />
                    {error}
                  </motion.div>
                )}
              </div>
              <motion.button
                type="submit"
                className="rounded-xl bg-linear-to-r from-[#936138] to-[#7e512e] px-6 py-3 text-xs font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#936138]/50 group"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="inline-flex items-center gap-2">
                  Subscribe
                  <motion.div animate={{ x: 0 }} whileHover={{ x: 2 }}>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300" />
                  </motion.div>
                </span>
              </motion.button>
            </motion.form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Newsletter;