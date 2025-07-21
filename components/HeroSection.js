"use client"

export default function HeroSection({ searchTerm, setSearchTerm }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover the Enchanting Beauty of West Bengal</h1>
        <p>Your ultimate travel companion for exploring incredible destinations, hidden gems, and cultural treasures</p>
        <div className="search-container">
          <input
            type="text"
            placeholder="🔍 Search destinations, places, or experiences..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
    </section>
  )
}
