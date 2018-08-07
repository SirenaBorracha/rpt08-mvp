import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import createNote from './components/CreateNote.jsx';
import notesList from './components/NotesList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
    // include this bindings
  }

  createNewNote (text) {
    console.log(`new note: ${text}`);

    // sends ajax post to server
    $.ajax({
      type: "POST",
      url: "",
      data: JSON.stringify({ 'data': text }),
      contentType: 'application/json',

      success: function(data) {
        console.log('😎 success: ', data);

      },

      error: function(err) {
        console.log('🤬');
      }
    });
  }

  render () {
    return (<div>
      <h1>Me Talk Pretty One Day</h1>
      <h4>...or something</h4>


      </div>)
  }
}




// compile this and render it on <App>
ReactDOM.render(<App />, document.getElementById('app'));
