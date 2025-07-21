"use client"

import { useEffect } from "react"

export default function WelcomeModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <div className="welcome-modal-overlay" onClick={onClose}>
      <div className="welcome-modal" onClick={(e) => e.stopPropagation()}>
        <div className="welcome-content">
          <img src="/t.webp" alt="Travista" className="welcome-logo" />
          <h1>Welcome to Travista!</h1>
          <p>
            Your ultimate travel companion for exploring the incredible destinations and hidden gems of West Bengal.
          </p>
          <ul className="welcome-features">
            <li>🗺️ Discover amazing destinations</li>
            <li>📱 Mobile-friendly experience</li>
            <li>🌟 Curated travel content</li>
            <li>💡 Local insights and tips</li>
            <li>🎯 Personalized recommendations</li>
            <li>📸 Stunning photography</li>
          </ul>
          <button onClick={onClose} className="welcome-button">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  )
}
