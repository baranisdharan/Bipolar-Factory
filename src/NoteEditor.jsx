import React, { useState } from 'react';

function NoteEditor({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Work'); // Default category

  const handleSave = () => {
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
          <button onClick={handleSave}>Save Note</button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default NoteEditor;
