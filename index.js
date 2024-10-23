const express = require("express")
const app = express()
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static('public'));



console.log("ALAB 318.2.1");



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})