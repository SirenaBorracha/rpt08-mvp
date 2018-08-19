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

    const createNote = {
      "grid-area": "3/2/4/3",
      "display": "grid",
      "grid-template-rows": "1fr 4fr 1fr"
    }

    const hSixStyle ={
      "grid-area": "1/1/2/2"
    }

    const inputStyle = {
      "grid-area": "2/1/3/2",
      "display": "flex"
    }

    const buttonStyle = {
      "grid-area": "3/1/4/2",
      "margin": "2% 0",
      "display": "flex",
      "justify-self": "right",
      "text-align": "center",
      "justify-content": "center",
      "width": "100px"
    }

    return (<div style={createNote}>
      <h6 style={hSixStyle}>add a new note below</h6>
      <textarea style={inputStyle} value={this.state.note} onChange={this.onChange}/>
      <button style={buttonStyle} onClick={this.addNote}> save note </button>
      </div>)
  }
}

export default CreateNote;

