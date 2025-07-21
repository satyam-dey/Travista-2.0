"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import WelcomeModal from "../components/WelcomeModal";
import WelcomePage from "../components/WelcomePage";

export default function Home() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showLoading, setShowLoading] = useState(true);
  const [showWelcomePage, setShowWelcomePage] = useState(false);
  const [hasSeenWelcome, setHasSeenWelcome] = useState(false);

  useEffect(() => {
    // Check if user has seen welcome page before
    const hasVisitedBefore = localStorage.getItem("travista-visited");
    const hasSeenWelcomePage = localStorage.getItem("travista-welcome-seen");

    if (!hasVisitedBefore) {
      localStorage.setItem("travista-visited", "true");
    }

    setHasSeenWelcome(!!hasSeenWelcomePage);

    fetchDestinations();
  }, []);

  useEffect(() => {
    // Handle loading screen
    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
      // Show welcome page only if user hasn't seen it before
      if (!hasSeenWelcome) {
        setShowWelcomePage(true);
      }
    }, 2500);

    return () => clearTimeout(loadingTimer);
  }, [hasSeenWelcome]);

  const fetchDestinations = async () => {
    try {
      const response = await fetch("/bengal_travista.json");
      const data = await response.json();
      setDestinations(data);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
        const loadingScreen = document.getElementById("loading-screen");
        if (loadingScreen) {
          loadingScreen.style.display = "none";
        }
      }, 2000);
    }
  };

  const filteredDestinations = destinations.filter(
    (dest) =>
      dest.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.spots.some((spot) =>
        spot.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleWelcomeComplete = () => {
    setShowWelcomePage(false);
    localStorage.setItem("travista-welcome-seen", "true");
    // Show the old welcome modal for first-time users
    if (!localStorage.getItem("travista-visited-old")) {
      setShowWelcome(true);
      localStorage.setItem("travista-visited-old", "true");
    }
  };
  return (
    <>
      {showLoading && (
        <div className="loading-screen">
          <div className="loading-content">
            <img src="/t.webp" alt="Travista" className="loading-logo" />
            <div className="loading-text">Loading Travista...</div>
          </div>
        </div>
      )}

      {showWelcomePage && <WelcomePage onComplete={handleWelcomeComplete} />}

      {/* {showWelcome && <WelcomeModal onClose={() => setShowWelcome(false)} />} */}
      {!showLoading && !showWelcomePage && (
        <>
          <Header />
          <main className="main-content">
            {/* Professional Hero Section */}
            <section className="hero">
              <div className="container">
                <div className="hero-content">
                  <h1>Discover West Bengal&apos;s Hidden Treasures</h1>
                  <p>
                    Experience authentic travel with our comprehensive guide to
                    West Bengal&apos;s most captivating destinations, cultural
                    landmarks, and natural wonders.
                  </p>
                  <div className="search-container">
                    <input
                      type="text"
                      placeholder="Search destinations, attractions, or experiences..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Destinations Section */}
            <section className="destinations">
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title">Featured Destinations</h2>
                  <p className="section-subtitle">
                    Explore carefully curated destinations that showcase the
                    rich heritage, natural beauty, and cultural diversity of
                    West Bengal.
                  </p>
                </div>
                <div className="destinations-grid">
                  {filteredDestinations.map((destination, index) => (
                    <div key={index} className="destination-container">
                      <div className="destination-header">
                        <h3 className="destination-title">
                          {destination.destination}
                        </h3>
                        <p className="destination-subtitle">
                          Discover {destination.spots.length} amazing
                          attractions in {destination.destination}
                        </p>
                      </div>
                      <div className="spots-grid">
                        {destination.spots
                          .slice(0, 6)
                          .map((spot, spotIndex) => {
                            const spotName = spot.name;
                            const mapQuery = `${spotName}, ${destination.destination}, West Bengal, India`;
                            const wikiQuery = spotName.replace(/\s+/g, "_");

                            return (
                              <div key={spotIndex} className="spot-card">
                                <img
                                  src={
                                    spot.image ||
                                    "/placeholder.svg?height=140&width=200&query=" +
                                      encodeURIComponent(spotName) ||
                                    "/placeholder.svg"
                                  }
                                  alt={spotName}
                                  className="spot-image"
                                  onError={(e) => {
                                    e.target.src =
                                      "/placeholder.svg?height=140&width=200&query=" +
                                      encodeURIComponent(spotName);
                                  }}
                                />
                                <div className="spot-content">
                                  <h4 className="spot-title">{spotName}</h4>
                                  <p className="spot-description">
                                    Explore the beauty of {spotName} in{" "}
                                    {destination.destination}.
                                  </p>
                                  <div className="spot-tags">
                                    <span className="spot-tag">
                                      {spot.category || "Tourist Spot"}
                                    </span>
                                    <span className="spot-tag">
                                      W.B. Tourism
                                    </span>
                                  </div>
                                  <div className="spot-actions">
                                    <a
                                      href={`https://en.wikipedia.org/wiki/${wikiQuery}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="spot-action-button primary"
                                    >
                                      More Info
                                    </a>
                                    <a
                                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                        mapQuery
                                      )}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="spot-action-button secondary"
                                    >
                                      Map
                                    </a>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                      {destination.spots.length > 6 && (
                        <div className="more-spots">
                          +{destination.spots.length - 6} more destinations to
                          explore
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Professional Stats Section */}
            <section className="stats-section">
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title">Our Impact</h2>
                  <p className="section-subtitle">
                    Trusted by thousands of travelers for authentic West Bengal
                    experiences
                  </p>
                </div>
                <div className="stats-grid">
                  <div className="stat-item">
                    <h3>23+</h3>
                    <p>Districts Covered</p>
                  </div>
                  <div className="stat-item">
                    <h3>150+</h3>
                    <p>Curated Destinations</p>
                  </div>
                  <div className="stat-item">
                    <h3>1000+</h3>
                    <p>Satisfied Travelers</p>
                  </div>
                  <div className="stat-item">
                    <h3>500+</h3>
                    <p>Travel Experiences</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
