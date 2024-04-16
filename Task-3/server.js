const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define the directory for static files (e.g., HTML, CSS)
const publicDirectoryPath = path.join(__dirname);

// Set up middleware to serve static files from the public directory
app.use(express.static(publicDirectoryPath));

// Define route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
