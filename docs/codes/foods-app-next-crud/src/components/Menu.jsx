import Link from 'next/link';
import { Container, Navbar, Nav } from 'react-bootstrap';

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Foods App</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" as="ul" defaultActiveKey="/">
            <Nav.Item as="li">
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link href="/about" passHref>
                <Nav.Link>About</Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
