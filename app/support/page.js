"use client"

import { useState } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Support() {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleRating = (value) => {
    setRating(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (rating > 0) {
      const ratings = JSON.parse(localStorage.getItem("travista-ratings") || "[]")
      ratings.push({
        rating,
        feedback,
        date: new Date().toISOString(),
      })
      localStorage.setItem("travista-ratings", JSON.stringify(ratings))

      setSubmitted(true)
      setRating(0)
      setFeedback("")
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  const getRatingText = () => {
    switch (rating) {
      case 1:
        return "Poor - We'll work to improve"
      case 2:
        return "Fair - Room for improvement"
      case 3:
        return "Good - Meeting expectations"
      case 4:
        return "Very Good - Exceeding expectations"
      case 5:
        return "Excellent - Outstanding service"
      default:
        return "Click a star to rate your experience"
    }
  }

  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <section className="page-hero">
            <h1>Support Travista</h1>
            <p className="lead">
              Your feedback helps us improve our services and create better travel experiences for the West Bengal
              tourism community.
            </p>
          </section>

          <div className="support-content">
            <div className="rating-section">
              <h2>Rate Your Experience</h2>
              {submitted && (
                <div className="success-message">
                  Thank you for your valuable feedback! Your rating helps us serve you better.
                </div>
              )}

              <form onSubmit={handleSubmit} className="auth-form">
                <div className="stars-container">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`star ${rating >= star ? "active" : ""}`}
                      onClick={() => handleRating(star)}
                    >
                      ★
                    </button>
                  ))}
                </div>

                <div className="rating-text">{getRatingText()}</div>

                <div className="form-group">
                  <label htmlFor="feedback">Additional Comments (Optional)</label>
                  <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Share your thoughts about Travista's services, features, or suggestions for improvement..."
                    rows="4"
                  ></textarea>
                </div>

                <button type="submit" className="submit-button" disabled={rating === 0}>
                  Submit Feedback
                </button>
              </form>
            </div>

            <div className="support-options">
              <h2>Other Ways to Support Us</h2>
              <div className="support-grid">
                <div className="support-card">
                  <h3>🌟 Spread the Word</h3>
                  <p>
                    Help fellow travelers discover West Bengal&apos;s beauty by sharing Travista with your friends, family,
                    and social networks.
                  </p>
                </div>

                <div className="support-card">
                  <h3>📱 Follow Our Journey</h3>
                  <p>
                    Stay connected with the latest destinations, travel tips, and community stories by following us on
                    social media platforms.
                  </p>
                </div>

                <div className="support-card">
                  <h3>🗺️ Suggest Hidden Gems</h3>
                  <p>
                    Know an amazing place that deserves recognition? Share your local knowledge and help us expand our
                    destination database.
                  </p>
                </div>

                <div className="support-card">
                  <h3>🐛 Report Issues</h3>
                  <p>
                    Help us maintain service excellence by reporting any technical issues, outdated information, or
                    areas for improvement.
                  </p>
                </div>

                <div className="support-card">
                  <h3>✍️ Share Your Stories</h3>
                  <p>
                    Inspire other travelers by sharing your West Bengal travel experiences, photos, and memorable
                    moments with our community.
                  </p>
                </div>

                <div className="support-card">
                  <h3>🤝 Partner With Us</h3>
                  <p>
                    Are you a local business, tour operator, or hospitality provider? Let&apos;s collaborate to enhance the
                    travel experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
