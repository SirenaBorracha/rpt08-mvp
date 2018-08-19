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
    var that = this;

    $.ajax({
      type: "GET",
      url: "http://localhost:3000/notes",
      dataType: 'json',

      success: function(data) {
        console.log('🐶 success: ', data);
        that.setState({
          notes: data
        });
      },

      error: function(err) {
        console.log('🤬🤬🤬');

      }
    });
  }

  render() {


    // $('#app').css("font-family", "sans-serif");
    // $('h1').css("background-color", "darkgrey");
    // $('li').css("font-size", "12px");

    //
    // three columns
    // in the middle create bunch of rows

    const everywhere = {
      "background-color": "whitesmoke",
      "display": "grid",
      "grid-template-columns": "1fr 3fr 1fr",
      "grid-template-rows": "1fr 1fr 3fr 10fr",
      "font-family": "helvetica",
      "height": "100vh",
      "width": "100vw"
    }

    const hOneStyles = {
      "background-color": "black",
      "color": "whitesmoke",
      "grid-area": "1/2/2/3",
      "padding": "0",
      "margin": "0",
      "display": "flex",
      "align-items": "center",
      "justify-content": "center"
    }

    const hFiveStyles = {
      "grid-area": "2/2/3/3",
      "display": "flex",
      "align-items": "center",
      "justify-content": "center",
      "letter-spacing": "2px"
    }


    return (<div style={everywhere}>
      <h1 style={hOneStyles}>bloknot</h1>
      <h5 style={hFiveStyles}>improve via marginal gains</h5>
      <CreateNote postNote={this.createNewNote}/>
      <NotesList notes={this.state.notes}/>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));







