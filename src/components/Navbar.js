import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';
import AuthModals from './AuthModals';

export default function CustomNavbar() {
  const { user, logout, setShowLogin, setShowSignup } = useAuth();

  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faUsers} className="me-2" />
          Alumni Connect
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user ? (
              <>
                <Nav.Link onClick={() => setShowLogin(true)}>Login</Nav.Link>
                <Nav.Link onClick={() => setShowSignup(true)}>Sign Up</Nav.Link>
              </>
            ) : (
              <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-user">
                  <img src="https://via.placeholder.com/32" alt="Profile" className="rounded-circle me-1" />
                  {user.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#profile">My Profile</Dropdown.Item>
                  <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
        </Navbar.Collapse>
        <AuthModals />
      </Container>
    </Navbar>
  );
}