require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const PAYSTACK_SECRET = pk_test_15359ac9d5720105683603c9bcf2a22fd80d8131; // secret key on server

if (!PAYSTACK_SECRET) { pk_test_15359ac9d5720105683603c9bcf2a22fd80d8131;
  process.exit(1);
}

// Use raw body parser for webhook to validate signature
app.post('/webhook/paystack', bodyParser.raw({ type: 'application/json' }), async (req, res) => {
  const signature = req.headers['x-paystack-signature'];
  const payload = req.body; // Buffer
  const expected = crypto.createHmac('sha512', PAYSTACK_SECRET).update(payload).digest('hex');

  if (signature !== expected) {
    console.warn('Invalid Paystack signature');
    return res.status(401).send('Invalid signature');
  }

  const event = JSON.parse(payload.toString());
  console.log('Received Paystack webhook event:', event.event);

  if (event.event === 'charge.success') {
    const data = event.data;
    const reference = data.reference;
    const amount = data.amount / 100;
    const email = data.customer?.email || '';
    const metadata = data.metadata || {};
    // Here, save transaction to DB (e.g., PostgreSQL, MongoDB, Firestore)
    // Example: append to a simple log file (for demo only)
    const record = { reference, amount, email, metadata, timestamp: new Date().toISOString() };
    fs.appendFileSync('donations.log', JSON.stringify(record) + '\\n');
    console.log('Donation recorded:', record);
    // Optionally verify using Paystack verify endpoint (redundant if webhook trusted)
  }

  res.status(200).send('OK');
});

app.get('/', (req, res) => res.send('Greendot Paystack webhook running.'));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
