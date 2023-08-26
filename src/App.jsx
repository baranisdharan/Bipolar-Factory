import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const updateNote = (index, updatedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = updatedNote;
    setNotes(updatedNotes);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h1>Note Taking App</h1>
      <NoteList notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
      <NoteEditor addNote={addNote} />
    </div>
  );
}

export default App;
