var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notes');

// var db = mongoose.connection;
  // commenting this jawn out didn't change anything

// create schema
var noteSchema = new mongoose.Schema({
  note: String
});

// compile schema into a model
var Note = mongoose.model('Note', noteSchema);

// write to db
/////////
let save = (note) => {
  console.log('☹️ we are inside save');

  var newNote = new Note({ note : note });

  newNote.save(function(err) {
    console.log('can haz save?')
    if (err) {
      console.log('error, NO SVAE');
      return handleError(err);
    }
  });
}


let findAll = (cb) => {
  Note.find().exec((err, data) => {
    if (err) {
      console.log('error, NO SVAE');
      return handleError(err);
    } else {
      cb(data);
    }
  });
}

// findAll(); // returns an s-ton of data in the terminal



// export db
module.exports.save = save;
module.exports.findAll = findAll;