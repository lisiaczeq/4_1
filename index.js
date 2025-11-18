'use strict';

const express = require('express');
const app = express();

app.get('/math/circle/:r', (req, res) => {
  const radius = parseFloat(req.params.r);
  
  if (isNaN(radius) || radius < 0) {
    return res.status(400).json({ error: 'Invalid radius. Please provide a positive number.' });
  }
  
  const result = {
    area: Math.PI * radius * radius,
    circumference: 2 * Math.PI * radius
  };
  
  res.json(result);
});

app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);
  
  if (isNaN(width) || isNaN(height) || width < 0 || height < 0) {
    return res.status(400).json({ error: 'Invalid dimensions. Please provide positive numbers.' });
  }
  
  const result = {
    area: width * height,
    perimeter: 2 * (width + height)
  };
  
  res.json(result);
});

app.get('/', (req, res) => {
  res.json({
    message: 'Math API',
    endpoints: [
      '/math/circle/:r - Calculate circle area and circumference',
      '/math/rectangle/:width/:height - Calculate rectangle area and perimeter'
    ]
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});