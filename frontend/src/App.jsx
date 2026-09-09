import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import PopularPicks from "./components/PopularPicks";
import AboutSection from "./components/AboutSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import ReservationPage from "./components/ReservationPage";
// Pages
import Menu from "./Pages/Menu";
import OurStory from "./components/OurStory";

const Home = () => (
  <>
    <Hero />
    <Feature />
    <PopularPicks />
    <AboutSection />
    <WhyChooseUs />
    <Gallery />
    <Testimonials />
    <Newsletter />
    <OurStory />
    <ReservationPage />
    <ContactPage />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#2A2421]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;