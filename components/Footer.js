import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/t.webp" alt="Travista" className="footer-logo-img" />
              <span>Travista</span>
            </div>
            <p>
              Your ultimate travel companion for exploring the beautiful destinations of West Bengal. Discover hidden
              gems, cultural treasures, and unforgettable experiences.
            </p>
            <p>Made with ❤️ for travelers who seek authentic adventures.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/">🏠 Home</Link>
              </li>
              <li>
                <Link href="/about">ℹ️ About Us</Link>
              </li>
              <li>
                <Link href="/contact">📧 Contact</Link>
              </li>
              <li>
                <Link href="/help">❓ Help & FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support & Community</h3>
            <ul>
              <li>
                <Link href="/support">⭐ Rate Us</Link>
              </li>
              <li>
                <Link href="/help">🆘 Get Help</Link>
              </li>
              <li>
                <Link href="/contact">💬 Contact Support</Link>
              </li>
              <li>
                <Link href="/auth/signup">👤 Join Community</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Legal & Policies</h3>
            <ul>
              <li>
                <Link href="/terms">📋 Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy">🔒 Privacy Policy</Link>
              </li>
              <li>
                <Link href="/sitemap">🗺️ Sitemap</Link>
              </li>
              <li>
                <Link href="/cookies">🍪 Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Travista. All rights reserved.</p>
          <p>Crafted with passion for wanderers and explorers 🌟</p>
        </div>
      </div>
    </footer>
  )
}
