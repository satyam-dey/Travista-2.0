"use client"

export default function FeaturedDestinations({ destinations }) {
  return (
    <section className="destinations">
      <div className="container">
        <h2 className="section-title">Explore Amazing Destinations</h2>
        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <div key={index} className="destination-container">
              <div className="destination-header">
                <h3 className="destination-title">{destination.destination}</h3>
                <p className="destination-subtitle">
                  Discover {destination.spots.length} amazing attractions in {destination.destination}
                </p>
              </div>
              <div className="spots-grid">
                {destination.spots.slice(0, 6).map((spot, spotIndex) => {
                  const spotName = spot.name
                  const mapQuery = `${spotName}, ${destination.destination}, West Bengal, India`
                  const wikiQuery = spotName.replace(/\s+/g, "_")

                  return (
                    <div key={spotIndex} className="spot-card">
                      <img
                        src={
                          spot.image || "/placeholder.svg?height=140&width=200&query=" + encodeURIComponent(spotName)
                        }
                        alt={spotName}
                        className="spot-image"
                        onError={(e) => {
                          e.target.src = "/placeholder.svg?height=140&width=200&query=" + encodeURIComponent(spotName)
                        }}
                      />
                      <div className="spot-content">
                        <h4 className="spot-title">{spotName}</h4>
                        <p className="spot-description">
                          Explore the beauty of {spotName} in {destination.destination}.
                        </p>
                        <div className="spot-tags">
                          <span className="spot-tag">{spot.category || "Tourist Spot"}</span>
                          <span className="spot-tag">W.B. Tourism</span>
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
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="spot-action-button secondary"
                          >
                            Map
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              {destination.spots.length > 6 && (
                <div className="more-spots">+{destination.spots.length - 6} more amazing spots to explore</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
