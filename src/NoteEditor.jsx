import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

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
    <Container style={{ textAlign: 'center', marginBottom: '10px' }}>
      <h3 style={{marginTop:'20px'}}>Create a Note</h3>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content:</Form.Label>
              <Form.Control
                placeholder="Text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Category:</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Sports">Sports</option>
                <option value="Education">Education</option>
                <option value="Entertainment">Entertainment</option>
              </Form.Control>
            </Form.Group><br/>
            <Button variant="primary" onClick={handleSave}>
              Save Note
            </Button>
          </Form>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default NoteEditor;
