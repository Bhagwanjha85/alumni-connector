import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Mentorship() {
  return (
    <Container className="py-5 mt-5">
      <h2 className="text-center mb-5">Mentorship Program</h2>
      
      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Become a Mentor</Card.Title>
              <Card.Text>
                Share your expertise and guide current students or junior alumni 
                in their career development.
              </Card.Text>
              <Button variant="primary">Register as Mentor</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Find a Mentor</Card.Title>
              <Card.Text>
                Connect with experienced alumni in your field of interest 
                and accelerate your career growth.
              </Card.Text>
              <Button variant="success">Browse Mentors</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="mt-5">
        <h4 className="mb-4">How It Works</h4>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Subtitle className="mb-3">1. Register</Card.Subtitle>
                <Card.Text>Create your profile and select your mentorship preferences</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Subtitle className="mb-3">2. Match</Card.Subtitle>
                <Card.Text>Our AI system matches you with compatible mentors/mentees</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Subtitle className="mb-3">3. Connect</Card.Subtitle>
                <Card.Text>Start your mentorship journey through our platform</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}