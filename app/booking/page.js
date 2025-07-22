"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
    <Header/>
    <section className="page-content">
      <div className="container container-sm">
        <div className="page-hero">
          <h1>Book Your Stay</h1>
          <p className="lead">Plan your trip to your favorite destination in West Bengal.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label>Destination</label>
            <input
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              placeholder="E.g. Darjeeling, Digha..."
            />
          </div>

          <div className="form-group">
            <label>Hotel Name</label>
            <input
              name="hotel_name"
              value={formData.hotel_name}
              onChange={handleChange}
              required
              placeholder="ShahJahan Residency"
            />
          </div>

          <div className="form-group">
            <label>Check-In Date</label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Check-Out Date</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Book Now
          </button>

          {submitted && (
            <div className="success-message" style={{ marginTop: "2rem" }}>
              ✅ Booking submitted! We&apos;ll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </section>
    <Footer/>
    </>
  );
}
