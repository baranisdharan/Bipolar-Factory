import React, { useState } from 'react';
import { Table, Container, Row, Col, Button, Form } from 'react-bootstrap';

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
    <Container style={{ textAlign: 'center' }}>
      <Row className="justify-content-between" style={{ marginBottom: '10px' }}>
        <Col md={6}>
          <Form.Group controlId="category">
            <Form.Label>Filter by Category:</Form.Label>
            <Form.Control
              as="select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Sports">Sports</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="search">
            <Form.Label>Search:</Form.Label>
            <Form.Control
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <Table bordered style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {currentNotes.map((note, index) => (
                <tr key={index}>
                  <td>
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
                  <td>
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
                  <td>
                    {editingIndex === index ? (
                      <Button variant="primary" onClick={() => setEditingIndex(-1)}>Save</Button>
                    ) : (
                      <Button variant="info" onClick={() => handleEdit(index)}>Edit</Button>
                    )}
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => deleteNote(index)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ marginTop: '10px' }}>
        {Array.from({ length: Math.ceil(filteredBySearch.length / notesPerPage) }, (_, index) => (
          <Button key={index} style={{width:'30px'}} variant="secondary" size="sm" onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </Row>
    </Container>
  );
}

export default NoteList;
