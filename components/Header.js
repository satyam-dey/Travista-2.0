"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [theme, setTheme] = useState("light")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("travista-theme") || "light"
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("travista-theme", newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo" onClick={closeMenu}>
            <img src="/t.webp" alt="Travista" className="logo-img" />
            <span>Travista</span>
          </Link>

          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/about" onClick={closeMenu}>
              About
            </Link>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
            <Link href="/help" onClick={closeMenu}>
              Help
            </Link>
            <Link href="/support" onClick={closeMenu}>
              Support
            </Link>
          </nav>

          <div className="header-actions">
            <button onClick={toggleTheme} className="theme-toggle" title="Toggle theme">
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <div className="auth-links">
              <Link href="/auth/signin" className="auth-button">
                Sign In
              </Link>
              <Link href="/auth/signup" className="auth-button">
                Sign Up
              </Link>
            </div>

            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
