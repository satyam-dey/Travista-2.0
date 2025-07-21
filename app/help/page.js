"use client"

import { useState, useEffect } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Help() {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(true)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    fetchFaqs()
  }, [])

  const fetchFaqs = async () => {
    try {
      const response = await fetch("/help.json")
      const data = await response.json()
      setFaqs(data.help_questions)
    } catch (error) {
      console.error("Error fetching FAQs:", error)
    } finally {
      setLoading(false)
    }
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  if (loading) {
    return (
      <>
        <Header />
        <main className="page-content">
          <div className="container">
            <div className="loading-text">Loading help content...</div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <section className="page-hero">
            <h1>Help & Support</h1>
            <p className="lead">
              Find answers to frequently asked questions and get the support you need for your West Bengal travel
              planning.
            </p>
          </section>

          <section className="faq-section">
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    className={`faq-question ${openFaq === index ? "active" : ""}`}
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                    <span className="faq-icon">{openFaq === index ? "−" : "+"}</span>
                  </button>
                  <div className={`faq-answer ${openFaq === index ? "open" : ""}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="professional-card" style={{ textAlign: "center", marginTop: "var(--space-3xl)" }}>
            <h2>Need Additional Support?</h2>
            <p>
              Can&apos;t find what you&apos;re looking for? Our dedicated support team is ready to assist you with personalized
              travel advice and detailed destination information.
            </p>
            <a
              href="/contact"
              className="auth-button"
              style={{ marginTop: "var(--space-lg)", display: "inline-block" }}
            >
              Contact Our Experts
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
