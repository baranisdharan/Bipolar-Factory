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
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div>
          <label>Filter by Category: </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Sports">Sports</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
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
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table style={{ border: '1px solid black', width: '60%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Title</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Content</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Edit</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentNotes.map((note, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      placeholder="Title"
                      value={note.title}
                      onChange={(e) =>
                        updateNote(index, { ...note, title: e.target.value })
                      }
                    />
                  ) : (
                    note.title
                  )}
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  {editingIndex === index ? (
                    <input
                      placeholder="Content"
                      value={note.content}
                      onChange={(e) =>
                        updateNote(index, { ...note, content: e.target.value })
                      }
                    />
                  ) : (
                    note.content
                  )}
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  {editingIndex === index ? (
                    <button onClick={() => setEditingIndex(-1)}>Save</button>
                  ) : (
                    <button onClick={() => handleEdit(index)}>Edit</button>
                  )}
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <button onClick={() => deleteNote(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
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
