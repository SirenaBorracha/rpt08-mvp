const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname + '/../client/dist');
app.use(express.static(__dirname + '/../client/dist'));

app.post('/notes', function(req, res) {
  // send req.body. whatever the note is to the mongodb
  console.log('🙃 req.body: ', req.body);

  // need to pass the note back as an array
    // with an object
      // with a unique key
      // could the key be the id?

  db.save(req.body.data);

  var noteSaved = {
    note : req.body.data
  };

  console.log('note saved: ', noteSaved);

  res.send('success');
});

app.get('/notes', function(req, res) {
  // db.find({fml:fck}, cb)
  // query all, pass in an empty obj
    // returns all data
  db.findAll(function(data) {
    res.send(data);
  });

  //


});

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
})


