const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // Set EJS as the view engine

// Set up routes
app.get('/', (req, res) => {
    res.render('index'); // Render index.ejs file
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    // Process form submission (e.g., save to database, send email, etc.)
    console.log(`Received form submission: Name - ${name}, Email - ${email}`);
    res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
