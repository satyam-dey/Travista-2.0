import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <section className="page-hero">
            <h1>About Travista</h1>
            <p className="lead">
              Welcome to Bengal Travista : Travel wide, feel Alive. Our moto is
              to drive travel-thirsty tourists all over the country through the
              wide range of popular tourist hotspots. We serve as a guide for
              tourists who often missout underrated yet charming spots due to
              lack of accuracy of location on maps. We provide ample information
              about various popular and even underrated tourist destinations all
              over India,covering almost every corner. We even provide exact
              google map location pinned with our hotspots , so that travellers
              can reach them out easily without missing out any of their
              favourite spot. So, come on join us as we uncover the stories,
              cultures, and hidden gems that make India a journey like no other.
              Our customer care team is always ready to resolve your issues
              ,kindly navigate to our contact us section.
            </p>
          </section>

          <section className="card-grid">
            <div className="professional-card">
              <h3>Our Mission</h3>
              <p>
                To democratize travel by making West Bengal&apos;s incredible
                destinations accessible to all travelers while promoting
                sustainable tourism practices that benefit local communities and
                preserve cultural heritage for future generations.
              </p>
            </div>

            <div className="professional-card">
              <h3>Our Vision</h3>
              <p>
                To become the leading digital platform for West Bengal tourism,
                connecting travelers with authentic experiences while fostering
                responsible travel that creates positive economic and social
                impact.
              </p>
            </div>

            <div className="professional-card">
              <h3>Our Expertise</h3>
              <p>
                Our team combines decades of local knowledge with cutting-edge
                technology to deliver personalized travel recommendations,
                insider insights, and comprehensive destination guides.
              </p>
            </div>

            <div className="professional-card">
              <h3>What We Offer</h3>
              <ul>
                <li>Comprehensive destination guides and itineraries</li>
                <li>Interactive maps with detailed location information</li>
                <li>Expert travel advice and local insights</li>
                <li>Cultural heritage and historical context</li>
                <li>Sustainable tourism recommendations</li>
                <li>24/7 customer support and assistance</li>
              </ul>
            </div>
          </section>

          <section className="contributors-section">
            <div className="section-header">
              <h2 className="section-title">Meet Our Contributors</h2>
              <p className="section-subtitle">
                The passionate team behind Travista, dedicated to showcasing
                West Bengal&apos;s beauty
              </p>
            </div>

            <div className="contributors-grid">
              <div className="contributor-card">
                <div className="contributor-image">
                  <img
                    src="/assests/satyam.webp?height=120&width=120"
                    alt="Satyam Dey"
                    className="contributor-photo"
                  />
                </div>
                <div className="contributor-info">
                  <h3 className="contributor-name">Satyam Dey</h3>
                  <p className="contributor-role">Full Stack Developer</p>
                  <p className="contributor-description">
                    An Electronics and Communication Engineer with expertise in
                    photography, video editing, and full stack development. My
                    unique blend of technical knowledge and creative skills
                    allows me to tackle challenges with innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="stats-section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Our Achievements</h2>
                <p className="section-subtitle">
                  Building trust through consistent excellence and customer
                  satisfaction
                </p>
              </div>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>23+</h3>
                  <p>Districts Covered</p>
                </div>
                <div className="stat-item">
                  <h3>150+</h3>
                  <p>Destinations</p>
                </div>
                <div className="stat-item">
                  <h3>1000+</h3>
                  <p>Happy Travelers</p>
                </div>
                <div className="stat-item">
                  <h3>24/7</h3>
                  <p>Support Available</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
