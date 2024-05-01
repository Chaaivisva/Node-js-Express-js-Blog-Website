require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const connectDB = require("./server/config/db.js");

const app = express();
const port = 5000 || process.env.PORT;

//Connect to DB
connectDB();

app.use(express.static('public'));

//Template Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'));

app.listen(port, (req, res)=>{
  console.log(`App is listening to server ${port}`);
});
