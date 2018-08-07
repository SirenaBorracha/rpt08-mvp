// express? server
// make an instance of express
// import db

const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/..client/dist'));

app.post('/notes', function(req, res) {

})


let port = 3000;

app.listen(port, function() {
  console.log(`listing on port ${port}`);
})

// handles request response
// sends data to db

