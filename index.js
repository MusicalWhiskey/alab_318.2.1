const express = require("express")
const app = express()
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static('public'));


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
  
  // Route with parameter
  app.get('/user/:name', (req, res) => {
    const userName = req.params.name;
    res.send(`Hello, ${userName}!`);
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})