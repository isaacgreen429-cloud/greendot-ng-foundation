// server.js – Greendot_Ng_Foundation backend
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // serve index.html and assets

// Donation endpoint
app.post("/donate", (req, res) => {
  const donation = req.body;
  donation.date = new Date().toISOString();

  // Read existing donations
  let donations = [];
  if (fs.existsSync("donations.json")) {
    donations = JSON.parse(fs.readFileSync("donations.json"));
  }

  // Save new donation
  donations.push(donation);
  fs.writeFileSync("donations.json", JSON.stringify(donations, null, 2));

  console.log("✅ Donation received:", donation);
  res.status(200).json({ success: true, message: "Donation saved successfully!" });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));