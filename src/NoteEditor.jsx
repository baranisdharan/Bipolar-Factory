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
    <div>
      <h2>Create a Note</h2>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content: </label>
        <input
          id="content"
          placeholder="Text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Category: </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          {/* Add more categories here */}
        </select>
      </div>
      <div>
        <button onClick={handleSave}>Save Note</button>
      </div>
    </div>
  );
}

export default NoteEditor;
