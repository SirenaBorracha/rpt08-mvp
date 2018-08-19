import React from 'react';

const notesList = {
  "grid-area": "4/2/5/3"
};

const NotesList = (props) => (
  <div style={notesList}>
  <h5>today's notes</h5>
  <div>
  { (props.notes.length < 1) ? (
    <div>
    <ul>
    <li>
    no new notes
    </li>
    </ul>
    </div>
    ) : (
    props.notes.map((el, idx) => (
      <div key={idx}>
      {el.note}
      </div>
      )))}
  </div>
  </div>
)

export default NotesList;


