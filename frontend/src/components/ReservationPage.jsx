import React, { useState } from "react";
import { MapPin, Phone, Clock, ArrowRight, AlertCircle, CheckCircle } from "lucide-react";

const ReservationPage = () => {
  const [reservationData, setReservationData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validateReservation = () => {
    const newErrors = {};
    if (!reservationData.name.trim()) newErrors.name = "Name is required";
    if (!reservationData.phone.trim()) newErrors.phone = "Phone is required";
    if (!reservationData.date) newErrors.date = "Date is required";
    if (!reservationData.time) newErrors.time = "Time is required";
    if (!reservationData.guests || reservationData.guests < 1) newErrors.guests = "Valid number of guests required";
    return newErrors;
  };

  const handleReservationSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateReservation();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      setSubmitMessage("");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reservationData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Reservation could not be submitted.");
      }

      setSubmitted(true);
      setSubmitMessage(result.message || "Reservation submitted! We'll confirm soon.");
      setReservationData({ name: "", phone: "", date: "", time: "", guests: "", notes: "" });
      setErrors({});

      setTimeout(() => {
        setSubmitted(false);
        setSubmitMessage("");
      }, 5000);
    } catch (error) {
      setSubmitted(false);
      setSubmitMessage(error.message || "Something went wrong while submitting the reservation.");
    }
  };

  return (
    <div id="reservation" className="min-h-screen bg-[#F9F5F0] px-6 pb-20 pt-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-300">
        <div className="mb-10 rounded-[30px] border border-[#936138]/15 bg-white p-6 shadow-[0_18px_40px_rgba(25,14,10,0.06)] md:p-8">
          <div className="mb-6 text-center">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[2px] text-[#936138]">
              → Reservation
            </p>
            <h1 className="font-serif text-4xl font-bold text-[#2A2421] md:text-5xl">
              Book a Table
            </h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-[#1d1714] p-6 text-[#f5e8dc]">
              <h2 className="mb-4 font-serif text-2xl font-bold text-[#f9f2eb]">Reserve your perfect coffee moment</h2>
              <p className="mb-6 text-sm leading-relaxed text-[#f0dfd2]">
                Book a cozy corner for your morning brew, catch-up with friends, or a relaxed afternoon dessert date.
              </p>
              <div className="space-y-4 text-sm text-[#f0dfd2]">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#936138]" />
                  <span>Open daily: 8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#936138]" />
                  <span>123 Coffee Street, Brewville, CA 90210</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#936138]" />
                  <span>+1 (234) 567-8900</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleReservationSubmit} className="space-y-4">
              {submitted && (
                <div className="rounded-xl bg-green-50 border border-green-200 p-4 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                  <p className="text-sm font-semibold text-green-700">{submitMessage || "Reservation submitted! We'll confirm soon."}</p>
                </div>
              )}

              {!submitted && submitMessage && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                  {submitMessage}
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={reservationData.name}
                    onChange={(e) => {
                      setReservationData({ ...reservationData, name: e.target.value });
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
                    type="tel"
                    placeholder="Phone Number"
                    value={reservationData.phone}
                    onChange={(e) => {
                      setReservationData({ ...reservationData, phone: e.target.value });
                      setErrors({ ...errors, phone: "" });
                    }}
                    className={`w-full rounded-xl border bg-[#F9F5F0] px-4 py-3 text-sm text-[#2A2421] placeholder-[#6E6864] outline-none transition-all duration-300 ${
                      errors.phone ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200" : "border-[#936138]/20 focus:border-[#936138] focus:ring-2 focus:ring-[#d4a373]/30"
                    }`}
                  />
                  {errors.phone && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.phone}</p>}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <input
                    type="date"
                    value={reservationData.date}
                    onChange={(e) => {
                      setReservationData({ ...reservationData, date: e.target.value });
                      setErrors({ ...errors, date: "" });
                    }}
                    className={`w-full rounded-xl border bg-[#F9F5F0] px-4 py-3 text-sm text-[#2A2421] outline-none transition-all duration-300 ${
                      errors.date ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200" : "border-[#936138]/20 focus:border-[#936138] focus:ring-2 focus:ring-[#d4a373]/30"
                    }`}
                  />
                  {errors.date && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.date}</p>}
                </div>
                <div>
                  <input
                    type="time"
                    value={reservationData.time}
                    onChange={(e) => {
                      setReservationData({ ...reservationData, time: e.target.value });
                      setErrors({ ...errors, time: "" });
                    }}
                    className={`w-full rounded-xl border bg-[#F9F5F0] px-4 py-3 text-sm text-[#2A2421] outline-none transition-all duration-300 ${
                      errors.time ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200" : "border-[#936138]/20 focus:border-[#936138] focus:ring-2 focus:ring-[#d4a373]/30"
                    }`}
                  />
                  {errors.time && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.time}</p>}
                </div>
                <div>
                  <input
                    type="number"
                    min="1"
                    max="12"
                    placeholder="Guests"
                    value={reservationData.guests}
                    onChange={(e) => {
                      setReservationData({ ...reservationData, guests: e.target.value });
                      setErrors({ ...errors, guests: "" });
                    }}
                    className={`w-full rounded-xl border bg-[#F9F5F0] px-4 py-3 text-sm text-[#2A2421] placeholder-[#6E6864] outline-none transition-all duration-300 ${
                      errors.guests ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200" : "border-[#936138]/20 focus:border-[#936138] focus:ring-2 focus:ring-[#d4a373]/30"
                    }`}
                  />
                  {errors.guests && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3" />{errors.guests}</p>}
                </div>
              </div>

              <textarea
                rows="4"
                placeholder="Special request or note"
                value={reservationData.notes}
                onChange={(e) => setReservationData({ ...reservationData, notes: e.target.value })}
                className="w-full rounded-xl border border-[#936138]/20 bg-[#F9F5F0] px-4 py-3 text-sm text-[#2A2421] placeholder-[#6E6864] outline-none transition-all duration-300 focus:border-[#936138] focus:ring-2 focus:ring-[#d4a373]/30"
              ></textarea>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#5F3925] to-[#4c2e1d] px-6 py-3 text-sm font-semibold text-[#fffaf5] transition-all duration-300 hover:shadow-lg hover:shadow-[#5F3925]/40 hover:scale-105 active:scale-95 group"
              >
                Reserve Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
