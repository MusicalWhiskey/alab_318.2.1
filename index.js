const express = require("express")
const morgan = require("morgan")
const path = require("path")
const app = express()
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, './public_data')));

// Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); 
  });


console.log("ALAB 318.2.1");

app.get('/', (req, res) => {
    res.render('main');
  });
  
  app.get('/info', (req, res) => {
    res.render('info');
  });
  
  app.post('/submit', (req, res) => {
    console.log(req.body.data);
    res.send('Success');
  });

  app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'public_data', 'Funny_Dog_Detective.jpg');
    res.download(filePath);
  });
  
  // Route with parameter
  app.get('/user/:name', (req, res) => {
    const userName = req.params.name;
    res.send(`Hello, ${userName}!`);
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})