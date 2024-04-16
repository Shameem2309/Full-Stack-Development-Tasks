const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static('public'));

// Route for rendering the HTML form
app.get('/', (req, res) => {
    res.render('index');
});

// Route for handling form submission
app.post('/submit', (req, res) => {
    const { name, email, password } = req.body;

    // Server-side validation
    if (!name || !email || !password) {
        return res.status(400).send('Please fill in all fields');
    }

    // Log the form submission
    console.log(`Received form submission - Name: ${name}, Email: ${email}`);

    // Respond with a success message
    res.send('Form submitted successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
