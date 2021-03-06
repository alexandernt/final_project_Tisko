const express = require('express');
const path = require("path");
const app = express();
const port = 3000;
const router = require('./routes/index');
//Middle wares
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


//Routes
app.use(require('./routes/index'));


//Port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});