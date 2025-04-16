const express = require('express');
const app = express();

// Middleware für JSON-Parsing
app.use(express.json());

// Basis-Route
app.get('/api', (req, res) => {
  res.json({ message: 'Willkommen zur Vercel-Express API', timestamp: new Date().toISOString() });
});

// Health-Check Endpunkt
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Dynamische Route mit Parameter
app.get('/api/hello/:name', (req, res) => {
  res.json({ message: `Hallo ${req.params.name}!` });
});

// Für lokale Entwicklung
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
  });
}

// Wichtig für Vercel - exportiere die Express-App als Handler
module.exports = app;