import React, { useState } from "react";
import { Mail, MapPin, Phone, Clock, ArrowRight, AlertCircle, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const validateContact = () => {
    const newErrors = {};
    if (!contactData.name.trim()) newErrors.name = "Name is required";
    if (!contactData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email)) newErrors.email = "Valid email required";
    if (!contactData.subject.trim()) newErrors.subject = "Subject is required";
    if (!contactData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateContact();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted("contact");
      setTimeout(() => {
        setContactData({ name: "", email: "", subject: "", message: "" });
        setSubmitted(null);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-[#F9F5F0] px-6 pb-20 pt-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-300">
        <div className="mb-10 text-center">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[2px] text-[#936138]">
            → Contact
          </p>
          <h1 className="font-serif text-4xl font-bold text-[#2A2421] md:text-5xl">
            Let’s Talk Coffee
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-[#936138]/15 bg-white p-6 shadow-[0_18px_40px_rgba(25,14,10,0.06)] md:p-8">
            <h2 className="mb-6 font-serif text-2xl font-bold text-[#2A2421] md:text-3xl">
              Send us a message
            </h2>

            <form onSubmit={handleContactSubmit} className="space-y-5">
              {submitted === "contact" && (
                <div className="rounded-xl bg-green-50 border border-green-200 p-4 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                  <p className="text-sm font-semibold text-green-700">Message sent! We'll get back to you soon.</p>
                </div>
              )}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactData.name}
                    onChange={(e) => {
                      setContactData({ ...contactData, name: e.target.value });
                      setErrors({ ...errors, name: "" });
                    }}
                    className={`w-full rounded-xl border bg-[#F9F5F0] px-4 py-3 text-sm text-[#2A2421] placeholder-[#6E6864] outline-none transition-all duration-300 ${
                      errors.name ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200" : "border-[#936138]/20 focus:border-[#936138] focus:ring-2 focus:ring-[#d4a373]/30"
                    }`}
                  />
                  {errors.name && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={contactData.email}
                    onChange={(e) => {
                      setContactData({ ...contactData, email: e.target.value });
                      setErrors({ ...errors, email: "" });
                    }}
                    className={`w-full rounded-xl border bg-[#F9F5F0] px-4 py-3 text-sm text-[#2A2421] placeholder-[#6E6864] outline-none transition-all duration-300 ${
                      errors.email ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200" : "border-[#936138]/20 focus:border-[#936138] focus:ring-2 focus:ring-[#d4a373]/30"
                    }`}
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.email}</p>}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={contactData.subject}
                  onChange={(e) => {
                    setContactData({ ...contactData, subject: e.target.value });
                    setErrors({ ...errors, subject: "" });
                  }}
                  className={`w-full rounded-xl border bg-[#F9F5F0] px-4 py-3 text-sm text-[#2A2421] placeholder-[#6E6864] outline-none transition-all duration-300 ${
                    errors.subject ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200" : "border-[#936138]/20 focus:border-[#936138] focus:ring-2 focus:ring-[#d4a373]/30"
                  }`}
                />
                {errors.subject && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.subject}</p>}
              </div>

              <div>
                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  value={contactData.message}
                  onChange={(e) => {
                    setContactData({ ...contactData, message: e.target.value });
                    setErrors({ ...errors, message: "" });
                  }}
                  className={`w-full rounded-xl border bg-[#F9F5F0] px-4 py-3 text-sm text-[#2A2421] placeholder-[#6E6864] outline-none transition-all duration-300 ${
                    errors.message ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200" : "border-[#936138]/20 focus:border-[#936138] focus:ring-2 focus:ring-[#d4a373]/30"
                  }`}
                ></textarea>
                {errors.message && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#5F3925] to-[#4c2e1d] px-6 py-3 text-sm font-semibold text-[#fffaf5] transition-all duration-300 hover:shadow-lg hover:shadow-[#5F3925]/40 hover:scale-105 active:scale-95 group"
              >
                Send Message
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-[#936138]/15 bg-[#1d1714] p-6 text-[#f5e8dc] shadow-[0_18px_40px_rgba(25,14,10,0.12)] md:p-8">
              <h3 className="mb-5 font-serif text-2xl font-bold text-[#f9f2eb]">Visit Brew & Bloom</h3>

              <div className="space-y-4 text-sm text-[#f0dfd2]">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#936138]" />
                  <span>123 Coffee Street, Brewville, CA 90210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-[#936138]" />
                  <span>+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#d4a373]" />
                  <span>hello@brewandbloom.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#d4a373]" />
                  <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#936138]/15 bg-white p-6 shadow-[0_18px_40px_rgba(25,14,10,0.06)] md:p-8">
              <h3 className="mb-3 font-serif text-2xl font-bold text-[#2A2421]">Why people reach out</h3>
              <ul className="space-y-3 text-sm text-[#6E6864]">
                <li>• Private events and café bookings</li>
                <li>• Catering and custom coffee experiences</li>
                <li>• Feedback, support, and partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
