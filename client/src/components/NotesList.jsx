import React from 'react';

const NotesList = (props) => (
  <div>
  <h4>Notes List</h4>
  <div>
  { (props.notes.length < 1) ? (
    <div>
    No new notes
    </div>
    ) : (
    <div>
    props.notes[0].note
    </div>)}
  </div>
  </div>
)

export default NotesList;


// (
//     props.notes.map((el, idx) => (
//       <div>
//       {el.note}
//       </div>
//       )))