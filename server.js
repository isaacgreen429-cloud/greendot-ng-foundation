// Greendot NG Foundation website server
// Membership applications and newsletter sign-ups are stored server-side.
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const DATA_DIR = process.env.GREENDOT_DATA_DIR || path.join(__dirname, ".private-data");

fs.mkdirSync(DATA_DIR, { recursive: true });
app.disable("x-powered-by");
app.use(express.json({ limit: "10kb" }));

function validEmail(value) {
  return typeof value === "string" &&
    value.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function readRecords(fileName) {
  const filePath = path.join(DATA_DIR, fileName);
  if (!fs.existsSync(filePath)) return [];
  const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return Array.isArray(parsed) ? parsed : [];
}

function saveRecords(fileName, records) {
  const filePath = path.join(DATA_DIR, fileName);
  const temporaryPath = filePath + ".tmp";
  fs.writeFileSync(temporaryPath, JSON.stringify(records, null, 2), { mode: 0o600 });
  fs.renameSync(temporaryPath, filePath);
}

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/membership-applications", (req, res) => {
  const body = req.body || {};
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const interest = typeof body.interest === "string" ? body.interest.trim() : "General membership interest";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length > 100 || !validEmail(email) || !phone || phone.length > 30 || message.length > 1000) {
    return res.status(400).json({ message: "Please provide a valid name, email address and phone number." });
  }

  try {
    const applications = readRecords("membership-applications.json");
    applications.push({
      name, email, phone, interest, message,
      status: "pending_review",
      submittedAt: new Date().toISOString()
    });
    saveRecords("membership-applications.json", applications);
    return res.status(201).json({
      success: true,
      status: "pending_review",
      message: "Your expression of interest has been received and is awaiting review. This is not confirmation of membership."
    });
  } catch (error) {
    console.error("Membership application storage failed:", error.message);
    return res.status(500).json({ message: "We could not save your application. Please try again later." });
  }
});

app.post("/api/newsletter", (req, res) => {
  const body = req.body || {};
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!validEmail(email) || body.consent !== true) {
    return res.status(400).json({ message: "A valid email address and consent are required." });
  }

  try {
    const subscriptions = readRecords("newsletter-subscriptions.json");
    const existing = subscriptions.some(item => item.email === email && !item.unsubscribedAt);
    if (existing) {
      return res.status(200).json({ success: true, message: "This email is already subscribed." });
    }
    subscriptions.push({
      email,
      consent: true,
      subscribedAt: new Date().toISOString()
    });
    saveRecords("newsletter-subscriptions.json", subscriptions);
    return res.status(201).json({ success: true, message: "Your newsletter subscription has been saved." });
  } catch (error) {
    console.error("Newsletter storage failed:", error.message);
    return res.status(500).json({ message: "We could not save your subscription. Please try again later." });
  }
});

// Online donations remain disabled until production Paystack verification is configured.
app.post("/api/donations", (_req, res) => {
  return res.status(503).json({
    success: false,
    message: "Online donations are temporarily unavailable."
  });
});

app.use(express.static(__dirname));
app.listen(PORT, () => {
  console.log(`Greendot NG website server listening on port ${PORT}`);
});
