import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CreateNote from './components/CreateNote.jsx';
import NotesList from './components/NotesList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
    // include this bindings
    this.createNewNote = this.createNewNote.bind(this);
    this.retrieveNotes = this.retrieveNotes.bind(this);
  }

  createNewNote(text) {
    console.log(`new note: ${text}`);
    var that = this;

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/notes",
      data: JSON.stringify({ 'data': text }),
      contentType: 'application/json',

      success: function(data) {
        console.log('😎 success: ', data);

        // call retrieveNotes
        // retrieveNotes sets state
        that.retrieveNotes();

      },

      error: function(err) {
        console.log('🤬');
      }
    });
  }

  retrieveNotes() {
    // ajax get
      // retrieve all notes from db

    $.ajax({
      type: "GET",
      url: "http://localhost:3000/notes",
      dataType: 'json',

      success: function(data) {
        console.log('🐶 success: ', data);
      },

      error: function(err) {
        console.log('🤬🤬🤬');

      }
    });
  }

  render() {
    return (<div>
      <h1>Me Write Pretty One Day</h1>
      <h5>...or something</h5>
      <CreateNote postNote={this.createNewNote}/>
      <NotesList notes={this.state.notes}/>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));