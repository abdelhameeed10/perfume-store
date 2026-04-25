const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

// Serve static files (CSS, Images, JS)
app.use(express.static(path.join(__dirname, './')));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`
   ┌──────────────────────────────────────────┐
   │                                          │
   │   VELARIS LUXURY SERVER IS LIVE!         │
   │                                          │
   │   - URL: http://localhost:${PORT}        │
   │                                          │
   └──────────────────────────────────────────┘
    `);
});
