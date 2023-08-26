import React, { useState } from 'react';

function NoteList({ notes, updateNote, deleteNote }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1); // Track the index of the note being edited

  const notesPerPage = 5;
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;

  const filteredNotes = selectedCategory === 'All' ? notes : notes.filter(note => note.category === selectedCategory);

  const filteredBySearch = filteredNotes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentNotes = filteredBySearch.slice(indexOfFirstNote, indexOfLastNote);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEdit = (index) => {
    setEditingIndex(index); // Set the index of the note being edited
  };

  return (
    <div>
      <div>
        <label>Filter by Category: </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          {/* Add more categories here */}
        </select>
      </div>
      <div>
        <label>Search: </label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <ul>
        {currentNotes.map((note, index) => (
          <li key={index}>
            <div>
              {editingIndex === index ? ( // Check if the current note is being edited
                <>
                  <input
                    type="text"
                    placeholder="Title"
                    value={note.title}
                    onChange={(e) => updateNote(index, { ...note, title: e.target.value })}
                  />
                  <textarea
                    placeholder="Content"
                    value={note.content}
                    onChange={(e) => updateNote(index, { ...note, content: e.target.value })}
                  />
                  <button onClick={() => setEditingIndex(-1)}>Save</button>
                </>
              ) : (
                <>
                  <span>{note.title}</span>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => deleteNote(index)}>Delete</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: Math.ceil(filteredBySearch.length / notesPerPage) }, (_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NoteList;
