import { Modal, Button, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react'; 

export default function AuthModals() {
  const { showLogin, showSignup, setShowLogin, setShowSignup, login, signup } = useAuth();
  const [authData, setAuthData] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    login(authData);
    setShowLogin(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    signup(authData);
    setShowSignup(false);
  };

  return (
    <>
      <Modal show={showLogin} onHide={() => setShowLogin(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email"
                value={authData.email}
                onChange={(e) => setAuthData({...authData, email: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password"
                value={authData.password}
                onChange={(e) => setAuthData({...authData, password: e.target.value})}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showSignup} onHide={() => setShowSignup(false)}>
        {/* Similar structure for signup form */}
      </Modal>
    </>
  );
}