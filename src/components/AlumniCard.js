import { Card } from 'react-bootstrap';

export default function AlumniCard({ alumni }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <img 
            src="https://via.placeholder.com/60" 
            alt={alumni.name} 
            className="rounded-circle me-3"
            width="60"
            height="60"
          />
          <div>
            <h5 className="mb-0">{alumni.name}</h5>
            <p className="text-muted mb-0">{alumni.position}</p>
          </div>
        </div>
        <div className="text-muted">
          <p className="mb-1"><strong>Batch:</strong> {alumni.batch}</p>
          <p className="mb-1"><strong>Branch:</strong> {alumni.branch}</p>
          <p className="mb-0"><strong>Location:</strong> {alumni.location}</p>
        </div>
      </Card.Body>
    </Card>
  );
}