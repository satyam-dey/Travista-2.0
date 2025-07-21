"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <section className="page-hero">
            <h1>Contact Us</h1>
            <p className="lead">
              Get in touch with our travel experts. We&apos;re here to help you
              plan your perfect West Bengal adventure.
            </p>
          </section>

          <h3 className="contact-head">Get In Touch</h3>
          <div className="contact-content">
            <div className="contact-info">

              <div className="contact-item">
                <h3>📧 Email Support</h3>
                <p>
                  <a href="mailto:travista2024@gmail.com">
                    travista2024@gmail.com
                  </a>
                </p>
              </div>

              <div className="contact-item">
                <h3>📞 Phone Support</h3>
                <p>
                  <a href="tel:+919333127841">+91 9333127841</a>
                </p>
              </div>

              <div className="contact-item">
                <h3>🏢 Office Address</h3>
                <p>
                  Travista Tourism Pvt. Ltd.
                  <br />
                  123 Park Street, Suite 456
                  <br />
                  Kolkata, West Bengal 700016
                  <br />
                  India
                </p>
              </div>

              <div className="contact-item">
                <h3>🕒 Business Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 7:00 PM
                  <br />
                  Saturday: 10:00 AM - 5:00 PM
                  <br />
                  <em>Emergency support available 24/7</em>
                </p>
              </div>
            </div>

            <div className="contact-form-container">
              
              {submitted && (
                <div className="success-message">
                  Thank you for your message! Our team will respond within 24
                  hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                  {errors.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
