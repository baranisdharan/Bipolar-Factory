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
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <label>Category: </label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        {/* Add more categories here */}
      </select>
      <button onClick={handleSave}>Save Note</button>
    </div>
  );
}

export default NoteEditor;
