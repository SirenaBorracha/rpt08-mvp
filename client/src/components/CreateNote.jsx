import React from 'react';

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: ''
    }
    // include this bindings
    this.onChange = this.onChange.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  onChange(e) {
    this.setState({
      note: e.target.value
    });
  }

  addNote() {
    this.props.postNote(this.state.note);
  }

  render() {
    return (<div>
      <h5>Add a new note</h5>
      <input value={this.state.note} onChange={this.onChange}/>
      <button onClick={this.addNote}> Save note </button>
      </div>)
  }
}

export default CreateNote;

