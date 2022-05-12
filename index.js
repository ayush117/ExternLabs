const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const path = require('path');

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.get('/', (req,res) => {
    res.json({ message: "Hello from ALL-server!" });
});

app.listen(PORT, () => {
    console.log('server up and running');
});
