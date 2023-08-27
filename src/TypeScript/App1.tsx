import React, { useState } from 'react';
import NoteList1 from './NoteList';
import NoteEditor1 from './NoteEditor';


interface Note {
  title: string;
  content: string;
  category: string;
}

function App1(): JSX.Element {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (newNote: Note): void => {
    setNotes([...notes, newNote]);
  };

  const updateNote = (index: number, updatedNote: Note): void => {
    const updatedNotes = [...notes];
    updatedNotes[index] = updatedNote;
    setNotes(updatedNotes);
  };

  const deleteNote = (index: number): void => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Note Taking App</h1>
      <NoteEditor1 addNote={addNote} />
      <NoteList1 notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
    </div>
  );
}

export default App1;
