import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { FaCoffee, FaUser, FaCalendarCheck } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);
  const [showAccountForm, setShowAccountForm] = useState(false);
  const [accountMode, setAccountMode] = useState('create');
  const [activeLink, setActiveLink] = useState(() => (
    window.location.pathname === '/menu' ? 'Menu' : 'Home'
  ));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      return;
    }

    window.location.href = `/#${sectionId}`;
  };

  const navLinks = [
    {
      name: 'Home',
      href: '/',
      active: true,
      sectionId: null,
    },
    {
      name: 'Menu',
      href: '/menu',
      active: false,
      sectionId: null,
    },
    {
      name: 'About',
      href: '/',
      active: false,
      sectionId: 'about',
    },
    {
      name: 'Gallery',
      href: '/',
      active: false,
      sectionId: 'gallery',
    },
    {
      name: 'Contact',
      href: '/',
      active: false,
      sectionId: 'contact',
    },
  ];

  // EXACT SAME TEXT STYLE FOR EVERY NAV LINK
  const navTextStyle = {
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 500,
    lineHeight: '1',
    letterSpacing: '0.02em',
  };

  return (
    <motion.nav 
      className="absolute top-0 left-0 z-50 w-full bg-linear-to-b from-black via-black/60 to-black/20 backdrop-blur-md shadow-2xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Cinematic top accent line */}
      <motion.div 
        className="h-0.5 bg-linear-to-r from-transparent via-[#936138]/60 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* MAIN NAVBAR */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between gap-3">

          {/* LOGO */}
          <div className="flex min-w-0 flex-1 items-center justify-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="flex items-center gap-2 font-serif text-lg font-bold tracking-tight text-[#f7f3ed] transition-all duration-300 hover:text-[#d4a373] group sm:text-xl"
              >
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-[#936138]"
                >
                  <FaCoffee
                    className="text-base transition-transform duration-300 group-hover:scale-110 sm:text-lg"
                    aria-hidden="true"
                  />
                </motion.div>

                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="truncate"
                >
                  Brew & Bloom
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden flex-1 items-center justify-center md:flex">
            <motion.div 
              className="flex items-center gap-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, staggerChildren: 0.1 }}
            >

              {navLinks.map((link, idx) => {

                /* ABOUT US / GALLERY - SECTION LINKS */
                if (link.sectionId) {
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                    >
                      <motion.button
                        type="button"
                        onClick={() => {
                          setActiveLink(link.name);
                          if (window.location.pathname !== '/') {
                            window.location.href = `/#${link.sectionId}`;
                            return;
                          }

                          scrollToSection(link.sectionId);
                        }}
                        className="relative inline-flex items-center justify-center border-0 bg-transparent py-1 text-[#f7f3ed]/70 transition-all duration-300 hover:text-[#f7f3ed] group"
                        style={navTextStyle}
                        whileHover={{ color: "#f7f3ed" }}
                      >
                        {link.name}

                        {activeLink === link.name && (
                          <motion.span 
                            className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-linear-to-r from-[#d4a373]/0 via-[#d4a373] to-[#d4a373]/0 shadow-lg shadow-[#d4a373]/50"
                            layoutId="activeIndicator"
                          />
                        )}
                        {activeLink !== link.name && (
                          <motion.span 
                            className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-[#d4a373] shadow-lg shadow-[#d4a373]/30"
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.button>
                    </motion.div>
                  );
                }

                /* HOME / MENU */
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setActiveLink(link.name)}
                      className={`relative inline-flex items-center justify-center py-1 transition-all duration-300 group ${
                        activeLink === link.name
                          ? 'text-[#f7f3ed]'
                          : 'text-[#f7f3ed]/70 hover:text-[#f7f3ed]'
                      }`}
                      style={navTextStyle}
                    >
                      {link.name}

                      {activeLink === link.name && (
                        <motion.span 
                          className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-linear-to-r from-[#d4a373]/0 via-[#d4a373] to-[#d4a373]/0 shadow-lg shadow-[#d4a373]/50"
                          layoutId="activeIndicator"
                        />
                      )}
                      {activeLink !== link.name && (
                        <motion.span 
                          className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-[#d4a373] shadow-lg shadow-[#d4a373]/30"
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

            </motion.div>
          </div>

          {/* DESKTOP RIGHT ICONS */}
          <motion.div 
            className="hidden flex-1 items-center justify-end gap-5 text-[#f7f3ed] md:flex"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >

            {/* ACCOUNT */}
            <motion.button
              type="button"
              aria-label={
                hasAccount || isLoggedIn
                  ? 'Login'
                  : 'Create account'
              }
              onClick={() => {
                setAccountMode(hasAccount || isLoggedIn ? 'login' : 'create');
                setShowAccountForm(true);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[#f7f3ed] transition-all duration-300 hover:border-[#d4a373] hover:text-[#f3d7b1] hover:bg-white/10 hover:shadow-lg hover:shadow-white/10 group"
              whileHover={{ scale: 1.2, boxShadow: "0 10px 25px rgba(243,215,177,0.3)" }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaUser className="text-[13px] transition-transform duration-300 group-hover:scale-110" />
              </motion.div>
            </motion.button>

            {/* RESERVATION */}
            <motion.button
              type="button"
              aria-label="Reservation"
              onClick={() => {
                if (window.location.pathname !== '/') {
                  window.location.href = '/#reservation';
                  return;
                }
                scrollToSection('reservation');
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4a373]/60 bg-linear-to-br from-[#f7f3ed]/20 to-[#f7f3ed]/5 text-[#f7f3ed] transition-all duration-300 hover:border-[#d4a373] hover:text-[#f3d7b1] hover:bg-linear-to-br hover:from-[#f7f3ed]/30 hover:to-[#f7f3ed]/10 hover:shadow-lg hover:shadow-[#d4a373]/50 group"
              whileHover={{ scale: 1.2, boxShadow: "0 10px 25px rgba(212,163,115,0.4)" }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaCalendarCheck className="text-[15px] transition-transform duration-300 group-hover:scale-110" />
              </motion.div>
            </motion.button>

          </motion.div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#f7f3ed] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="space-y-4 border-t border-white/10 bg-linear-to-b from-[#2b1810]/98 to-[#1a0f0a]/95 px-6 pt-4 pb-6 text-center backdrop-blur-xl shadow-2xl md:hidden">

          <div className="flex flex-col space-y-4">

            {navLinks.map((link) => {

              const mobileTextStyle = {
                fontSize: '16px',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 500,
                lineHeight: '1',
                letterSpacing: '0.02em',
              };

              /* MOBILE ABOUT / GALLERY - SECTION LINKS */
              if (link.sectionId) {
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsOpen(false);

                      if (window.location.pathname !== '/') {
                        window.location.href = `/#${link.sectionId}`;
                        return;
                      }

                      scrollToSection(link.sectionId);
                    }}
                    className={`relative border-0 bg-transparent text-[#f7f3ed]/80 transition-colors hover:text-[#d4a373] ${
                      activeLink === link.name ? 'text-[#f7f3ed]' : ''
                    }`}
                    style={mobileTextStyle}
                  >
                    {link.name}
                    {activeLink === link.name && (
                      <span className="absolute -bottom-2 left-1/2 h-0.5 w-10 -translate-x-1/2 rounded-full bg-[#d4a373]" />
                    )}
                  </button>
                );
              }

              /* MOBILE HOME / MENU */
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsOpen(false);
                  }}
                  className={`relative text-[#f7f3ed]/80 transition-colors hover:text-[#d4a373] ${
                    activeLink === link.name ? 'text-[#f7f3ed]' : ''
                  }`}
                  style={mobileTextStyle}
                >
                  {link.name}
                  {activeLink === link.name && (
                    <span className="absolute -bottom-2 left-1/2 h-0.5 w-10 -translate-x-1/2 rounded-full bg-[#d4a373]" />
                  )}
                </Link>
              );
            })}

          </div>

          {/* MOBILE ICONS */}
          <div className="flex items-center justify-center gap-4 border-t border-white/10 pt-4 text-[#f7f3ed]">

            {/* ACCOUNT */}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setAccountMode(hasAccount || isLoggedIn ? 'login' : 'create');
                setShowAccountForm(true);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[#f7f3ed] transition-all duration-300 hover:border-[#d4a373] hover:bg-white/10 hover:shadow-lg hover:shadow-white/10 group"
            >
              <FaUser className="text-[13px] transition-transform duration-300 group-hover:scale-110" />
            </button>

            {/* RESERVATION */}
            <button
              type="button"
              aria-label="Reservation"
              onClick={() => {
                setIsOpen(false);
                if (window.location.pathname !== '/') {
                  window.location.href = '/#reservation';
                  return;
                }
                scrollToSection('reservation');
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4a373]/60 bg-linear-to-br from-[#f7f3ed]/20 to-[#f7f3ed]/5 text-[#f7f3ed] transition-all duration-300 hover:border-[#d4a373] hover:bg-linear-to-br hover:from-[#f7f3ed]/30 hover:to-[#f7f3ed]/10 hover:shadow-lg hover:shadow-[#d4a373]/50 group"
            >
              <FaCalendarCheck className="text-[14px] transition-transform duration-300 group-hover:scale-110" />
            </button>

          </div>

        </div>
      )}

      {/* ACCOUNT MODAL */}
      {showAccountForm && (
        <>
          <div className="fixed inset-0 z-60 bg-[#000000]/60 backdrop-blur-md" />

          <div className="fixed inset-0 z-70 flex items-start justify-center p-4 pt-24">
            <div className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-[#936138]/30 bg-linear-to-br from-[#fffaf5] to-[#f5efe8] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
              <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-transparent via-[#d4a373]/40 to-transparent" />

              <div className="max-h-[85vh] overflow-y-auto p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-[#2A2421]">
                    {accountMode === 'create' ? 'Create Account' : 'Login'}
                  </h3>

                  <button
                    type="button"
                    onClick={() => setShowAccountForm(false)}
                    className="rounded-full bg-[#F3E8DC] p-2 text-[#5F3925] transition-all duration-300 hover:bg-[#E8D5C4] hover:shadow-lg hover:shadow-[#5F3925]/20 group"
                    aria-label="Close account form"
                  >
                    <X className="text-sm transition-transform duration-300 group-hover:rotate-90" />
                  </button>
                </div>

                <div className="space-y-4">
                  {accountMode === 'create' && (
                    <input
                      type="text"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="w-full rounded-xl border border-[#936138]/20 bg-[#F9F5F0] px-4 py-3 text-sm text-[#2A2421] outline-none transition-all duration-300 focus:border-[#936138] focus:bg-white focus:shadow-lg focus:shadow-[#936138]/20 focus:ring-1 focus:ring-[#d4a373]/30"
                    />
                  )}

                  <input
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-[#936138]/20 bg-[#F9F5F0] px-4 py-3 text-sm text-[#2A2421] outline-none transition-all duration-300 focus:border-[#936138] focus:bg-white focus:shadow-lg focus:shadow-[#936138]/20 focus:ring-1 focus:ring-[#d4a373]/30"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-[#936138]/20 bg-[#F9F5F0] px-4 py-3 text-sm text-[#2A2421] outline-none transition-all duration-300 focus:border-[#936138] focus:bg-white focus:shadow-lg focus:shadow-[#936138]/20 focus:ring-1 focus:ring-[#d4a373]/30"
                  />

                  <button
                    type="button"
                    onClick={() => {
                      if (accountMode === 'create') {
                        if (formData.name && formData.email && formData.password) {
                          setHasAccount(true);
                          setIsLoggedIn(true);
                          setShowAccountForm(false);

                          setFormData({
                            name: '',
                            email: '',
                            password: '',
                          });
                        }
                        return;
                      }

                      if (formData.email && formData.password) {
                        setIsLoggedIn(true);
                        setShowAccountForm(false);

                        setFormData({
                          name: '',
                          email: '',
                          password: '',
                        });
                      }
                    }}
                    className="w-full rounded-full bg-linear-to-r from-[#5F3925] to-[#4a2d1d] px-4 py-3 text-sm font-semibold text-[#fffaf5] transition-all duration-300 hover:shadow-lg hover:shadow-[#5F3925]/40 hover:from-[#6b3f2e] hover:to-[#523428] active:scale-95"
                  >
                    {accountMode === 'create' ? 'Create Account' : 'Login'}
                  </button>

                  <p className="text-center text-xs text-[#6E6864]">
                    {accountMode === 'create' ? 'Already have an account?' : 'New here?'}{' '}
                    <button
                      type="button"
                      className="font-semibold text-[#5F3925] underline-offset-2 hover:underline"
                      onClick={() => setAccountMode(accountMode === 'create' ? 'login' : 'create')}
                    >
                      {accountMode === 'create' ? 'Login' : 'Create Account'}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

    </motion.nav>
  );
};

export default Navbar;