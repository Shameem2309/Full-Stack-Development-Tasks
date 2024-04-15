const express = require('express');
const app = express();
const PORT = 3000;

//Middleware to parse incoming request bodies
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

//server static files

app.use(express.static('public'));

//set up routes
app.get('/',(req, res)=>{
    res.render('index');
});

//Route for html form

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname + '/index.html');
// });

//Route for handling form submission
app.post('/submit',(req,res)=>{
   const {name, email} = req.body;
   
    console.log(`received form submission -${name}, Email - ${email}`);
    res.send('formsubmitted')
});

//start server
app.listen(PORT, ()=>{
    console.log(`Server is running on http:localhost:${PORT}`)
});