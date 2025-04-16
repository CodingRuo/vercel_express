const express = require('express');
const router = express.Router();

// Beispiel-Daten (in einer echten App würde hier eine Datenbankverbindung stehen)
const products = [
  { id: 1, name: 'Produkt 1', price: 19.99 },
  { id: 2, name: 'Produkt 2', price: 29.99 },
  { id: 3, name: 'Produkt 3', price: 39.99 }
];

// GET /api/products
router.get('/api/products', (req, res) => {
  res.json(products);
});

// GET /api/products/:id
router.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Produkt nicht gefunden' });
  res.json(product);
});

module.exports = router;