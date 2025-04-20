import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import AlumniCard from '../components/AlumniCard';

export default function Directory() {
  const [alumni, setAlumni] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    batch: '',
    branch: '',
    location: '',
    industry: ''
  });

  useEffect(() => {
    // Fetch data from API
    const mockData = [
      { id: 1, name: 'John Doe', batch: 2021, branch: 'CS', position: 'Software Engineer', location: 'New York' },
      // More data...
    ];
    setAlumni(mockData);
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredAlumni = alumni.filter(alum => {
    return (
      alum.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.batch ? alum.batch === filters.batch : true) &&
      (filters.branch ? alum.branch === filters.branch : true)
    );
  });

  return (
    <Container className="py-5 mt-5">
      <h2 className="text-center mb-5">Alumni Directory</h2>
      
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Row className="g-3">
            <Col md={4}>
              <Form.Control
                name="search"
                placeholder="Search by name, company..."
                onChange={handleFilterChange}
              />
            </Col>
            {/* Add other filters */}
          </Row>
        </Card.Body>
      </Card>

      <Row className="g-4">
        {filteredAlumni.map(alum => (
          <Col key={alum.id} md={6} lg={4} xl={3}>
            <AlumniCard alumni={alum} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}