import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

interface Note {
  title: string;
  content: string;
  category: string;
}

interface NoteEditorProps {
  addNote: (newNote: Note) => void;
}

function NoteEditor1({ addNote }: NoteEditorProps): JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [category, setCategory] = useState<string>('Work');

  const handleSave = (): void => {
    if (title && content) {
      addNote({ title, content, category });
      setTitle('');
      setContent('');
      setCategory('Work');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h2>Create a Note</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ border: '1px solid black', padding: '20px', width: '300px' }}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="content">Content: </label>
          <input
            id="content"
            placeholder="Text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <br /><br />
          <label htmlFor="category">Category: </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Sports">Sports</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          <br /><br />
          <Button onClick={handleSave}>Save Note</Button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default NoteEditor1;
