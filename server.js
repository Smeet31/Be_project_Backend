const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug')


app.use(express.static(path.join(__dirname, 'build')))



app.listen(8000, () => {
  console.log("Listening on port 8000");
});
