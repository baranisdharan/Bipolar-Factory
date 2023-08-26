import React from 'react';

function NoteList({ notes, updateNote, deleteNote }) {
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          <div>
            <span>{note.title}</span>
            <button onClick={() => updateNote(index, note)}>Edit</button>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
