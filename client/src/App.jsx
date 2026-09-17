import { useState } from "react";
import "./App.css";

function App() {
  const [destination, setDestination] = useState("Platform 1");
  const [route, setRoute] = useState(null);

  const facilities = [
    ["🎫", "Ticket Counter", "Main Entrance"],
    ["🚻", "Restroom", "Platform 1"],
    ["🍴", "Food Court", "First Floor"],
    ["🪑", "Waiting Hall", "Main Building"],
    ["♿", "Lift", "Platform 2"],
    ["🏧", "ATM", "Main Entrance"],
  ];

  const findRoute = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/route?destination=${encodeURIComponent(
          destination
        )}`
      );

      const data = await response.json();
      setRoute(data);
    } catch (error) {
      alert("Please start the server first.");
    }
  };

  return (
    <div className="app">

      <nav className="navbar">
        <div className="logo">🚆 RailNav</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#navigation">Navigation</a>
          <a href="#map">Map</a>
          <a href="#facilities">Facilities</a>
          <a href="#features">Features</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-title">SMART RAILWAY NAVIGATION</p>

          <h1>
            Find Your Way
            <br />
            Inside the Station
          </h1>

          <p>
            Interactive railway station navigation with accessible routes,
            facility search and voice-guided directions.
          </p>

          <button
            className="primary-btn"
            onClick={() =>
              document
                .getElementById("navigation")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Navigation →
          </button>
        </div>

        <div className="station-card">
          <div className="train-icon">🚆</div>
          <h3>Smart Railway Station</h3>
          <p>Navigate • Discover • Travel</p>
        </div>
      </section>

      <section className="section" id="navigation">
        <div className="section-heading">
          <p className="small-title">SMART NAVIGATION</p>
          <h2>Where do you want to go?</h2>
          <p>Select your destination and find the best route.</p>
        </div>

        <div className="navigation-box">
          <label>Destination</label>

          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option>Platform 1</option>
            <option>Platform 2</option>
            <option>Ticket Counter</option>
            <option>Restroom</option>
            <option>Food Court</option>
            <option>Waiting Hall</option>
            <option>Lift</option>
            <option>ATM</option>
          </select>

          <label className="check-option">
            <input type="checkbox" />
            Accessible route
          </label>

          <button className="primary-btn" onClick={findRoute}>
            Find Route
          </button>
        </div>
      </section>

      {route && (
        <section className="section">
          <div className="route-result">
            <p className="small-title">ROUTE RESULT</p>

            <h2>Route to {route.destination}</h2>

            <p>
              📍 {route.from} → 📌 {route.destination}
            </p>

            <div className="route-info">
              <strong>{route.distance}</strong>
              <span>{route.estimatedTime}</span>
            </div>

            <div className="steps">
              {route.steps.map((step, index) => (
                <div className="step" key={index}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section" id="map">
        <div className="section-heading">
          <p className="small-title">INTERACTIVE MAP</p>
          <h2>Station Map</h2>
          <p>Explore platforms and important station facilities.</p>
        </div>

        <div className="map">
          <div className="you-are-here">📍 YOU ARE HERE</div>

          <div className="map-area">

            <div className="map-building entrance">
              <b>Main Entrance</b>
            </div>

            <div className="map-building ticket">
              🎫 Ticket Counter
            </div>

            <div className="map-building food">
              🍴 Food Court
            </div>

            <div className="map-building waiting">
              🪑 Waiting Hall
            </div>

            <div className="platform platform1">
              🚆 Platform 1
            </div>

            <div className="platform platform2">
              🚆 Platform 2
            </div>

            <div className="map-building lift">
              ♿ Lift
            </div>

            <div className="map-building restroom">
              🚻 Restroom
            </div>

          </div>
        </div>
      </section>

      <section className="section facilities-section" id="facilities">
        <div className="section-heading">
          <p className="small-title">FACILITY SEARCH</p>
          <h2>Station Facilities</h2>
          <p>Quickly find everything you need inside the station.</p>
        </div>

        <div className="facility-grid">

          {facilities.map((facility) => (
            <div className="facility-card" key={facility[1]}>

              <div className="facility-icon">
                {facility[0]}
              </div>

              <h3>{facility[1]}</h3>

              <p>{facility[2]}</p>

              <button
                onClick={() =>
                  alert(`Navigate to ${facility[1]}`)
                }
              >
                Navigate →
              </button>

            </div>
          ))}

        </div>
      </section>

      <section className="section" id="features">

        <div className="section-heading">
          <p className="small-title">SMART FEATURES</p>
          <h2>Designed for Everyone</h2>
        </div>

        <div className="features-grid">

          <div className="feature-card">
            <span>🧭</span>
            <h3>Smart Navigation</h3>
            <p>Find suitable routes to your destination.</p>
          </div>

          <div className="feature-card">
            <span>♿</span>
            <h3>Accessibility</h3>
            <p>Routes using lifts, ramps and accessible paths.</p>
          </div>

          <div className="feature-card">
            <span>🔎</span>
            <h3>Facility Search</h3>
            <p>Search toilets, ATMs, food courts and more.</p>
          </div>

          <div className="feature-card">
            <span>📱</span>
            <h3>Mobile Friendly</h3>
            <p>Easy-to-use interface for passengers.</p>
          </div>

        </div>
      </section>

      <footer>
        <h3>🚆 RailNav</h3>
        <p>Smart Railway Station Navigation System</p>
        <p>SIH 1710 • Ministry of Railway</p>
      </footer>

    </div>
  );
}

export default App;