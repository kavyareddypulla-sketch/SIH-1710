const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Railway Station Navigation API is running",
  });
});

app.get("/api/station", (req, res) => {
  res.json({
    name: "Smart Railway Station",
    city: "Chennai",
    facilities: [
      "Platform 1",
      "Platform 2",
      "Ticket Counter",
      "Restroom",
      "Food Court",
      "Waiting Hall",
      "Lift",
      "Escalator",
      "ATM",
      "Drinking Water",
    ],
  });
});

app.get("/api/facilities", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Ticket Counter",
      location: "Main Entrance",
    },
    {
      id: 2,
      name: "Restroom",
      location: "Platform 1",
    },
    {
      id: 3,
      name: "Food Court",
      location: "First Floor",
    },
    {
      id: 4,
      name: "Waiting Hall",
      location: "Main Building",
    },
    {
      id: 5,
      name: "Lift",
      location: "Platform 2",
    },
    {
      id: 6,
      name: "ATM",
      location: "Main Entrance",
    },
  ]);
});

app.get("/api/route", (req, res) => {
  const destination = req.query.destination || "Platform 1";

  res.json({
    from: "Current Location",
    destination: destination,
    distance: "250 meters",
    estimatedTime: "4 minutes",
    accessible: true,
    steps: [
      "Walk straight from your current location",
      "Turn right near the ticket counter",
      "Continue towards the platform area",
      `Reach ${destination}`,
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});