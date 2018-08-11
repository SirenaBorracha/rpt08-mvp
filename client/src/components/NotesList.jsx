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
    props.notes.map((el, idx) => (
      <div>
      {el.note}
      </div>
      )))}
  </div>
  </div>
)

export default NotesList;


