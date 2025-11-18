'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  const r = parseFloat(req.params.r);
  
  // Validate input: must be a positive number
  if (isNaN(r) || r <= 0) {
    return res.status(400).json({ error: "radius must be a positive number" });
  }
  
  // Calculate area and circumference
  const area = Math.PI * r * r;
  const circumference = 2 * Math.PI * r;
  
  // Format to 2 decimal places as strings
  const result = {
    area: area.toFixed(2),
    circumference: circumference.toFixed(2)
  };
  
  res.json(result);
});


const PORT = process.env.PORT || 3000;

// Only start the server if this file is run directly (not imported for testing)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;