"use client"

import { useEffect, useState } from "react"

export default function WelcomePage({ onComplete }) {
  const [showWelcome, setShowWelcome] = useState(false)
  const [mainText, setMainText] = useState("")
  const [subText, setSubText] = useState("")
  const [showSubText, setShowSubText] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  const mainTextContent = "Welcome to Travista"
  const subTextContent = "Travel wide, Feel alive"

  useEffect(() => {
    // Show welcome page after a brief delay
    const showTimer = setTimeout(() => {
      setShowWelcome(true)
    }, 500)

    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!showWelcome) return

    // Type main text
    let mainIndex = 0
    const mainTypingTimer = setInterval(() => {
      if (mainIndex < mainTextContent.length) {
        setMainText(mainTextContent.slice(0, mainIndex + 1))
        mainIndex++
      } else {
        clearInterval(mainTypingTimer)
        // Start sub text after main text is complete
        setTimeout(() => {
          setShowSubText(true)
        }, 500)
      }
    }, 100)

    return () => clearInterval(mainTypingTimer)
  }, [showWelcome])

  useEffect(() => {
    if (!showSubText) return

    // Type sub text
    let subIndex = 0
    const subTypingTimer = setInterval(() => {
      if (subIndex < subTextContent.length) {
        setSubText(subTextContent.slice(0, subIndex + 1))
        subIndex++
      } else {
        clearInterval(subTypingTimer)
        // Start fade out after both texts are complete
        setTimeout(() => {
          setFadeOut(true)
          setTimeout(() => {
            onComplete()
          }, 1000)
        }, 2000)
      }
    }, 80)

    return () => clearInterval(subTypingTimer)
  }, [showSubText, onComplete])

  if (!showWelcome) return null

  return (
    <div className={`welcome-page ${fadeOut ? "fade-out" : ""}`}>
      <div className="welcome-background"></div>
      <div className="welcome-overlay"></div>
      <div className="welcome-content-container">
        <div className="welcome-text-content">
          <h1 className="welcome-main-text">
            {mainText}
            <span className="typing-cursor">|</span>
          </h1>
          {showSubText && (
            <p className="welcome-sub-text">
              {subText}
              <span className="typing-cursor-sub">|</span>
            </p>
          )}
        </div>
        <div className="welcome-logo-container">
          <img src="/t.webp" alt="Travista" className="welcome-page-logo" />
        </div>
      </div>
    </div>
  )
}
