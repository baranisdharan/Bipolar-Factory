import React, { useState } from 'react';

function NoteList({ notes, updateNote, deleteNote }) {
  const [selectedCategory, setSelectedCategory] = useState('All'); // State for selected category
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const notesPerPage = 5; // Number of notes per page

  const filteredNotes = selectedCategory === 'All' ? notes : notes.filter(note => note.category === selectedCategory);
  
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
      <ul>
        {currentNotes.map((note, index) => (
          <li key={index}>
            <div>
              <span>{note.title}</span>
              <button onClick={() => updateNote(index, note)}>Edit</button>
              <button onClick={() => deleteNote(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: Math.ceil(filteredNotes.length / notesPerPage) }, (_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NoteList;
