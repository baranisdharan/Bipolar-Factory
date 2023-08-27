import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';

interface Note {
  title: string;
  content: string;
  category: string;
}

interface NoteListProps {
  notes: Note[];
  updateNote: (index: number, updatedNote: Note) => void;
  deleteNote: (index: number) => void;
}

function NoteList1({ notes, updateNote, deleteNote }: NoteListProps): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [editingIndex, setEditingIndex] = useState<number>(-1);

  const notesPerPage = 5;
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;

  const filteredNotes = selectedCategory === 'All' ? notes : notes.filter(note => note.category === selectedCategory);

  const filteredBySearch = filteredNotes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentNotes = filteredBySearch.slice(indexOfFirstNote, indexOfLastNote);

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const handleEdit = (index: number): void => {
    setEditingIndex(index);
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
        <Table bordered style={{ width: '60%', borderCollapse: 'collapse' }}>
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
                    <Button variant="primary" onClick={() => setEditingIndex(-1)}>Save</Button>
                  ) : (
                    <Button variant="info" onClick={() => handleEdit(index)}>Edit</Button>
                  )}
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <Button variant="danger" onClick={() => deleteNote(index)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {Array.from({ length: Math.ceil(filteredBySearch.length / notesPerPage) }, (_, index) => (
          <Button key={index} variant="secondary" size="sm" onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default NoteList1;
