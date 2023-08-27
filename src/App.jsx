import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap CSS

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
    <Container>      
      <NoteEditor addNote={addNote} />
      <NoteList notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
    </Container>
  );
}

export default App;
