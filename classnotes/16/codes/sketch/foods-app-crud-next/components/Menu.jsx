import { useState } from 'react';
import Link from 'next/link';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Menu = () => {
  const [activedNavLink, setActivedNavLink] = useState('home');

  const navItemClass = (item) => {
    return activedNavLink === item ? 'nav-item active' : 'nav-item ';
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/">
          <Navbar.Brand>Foods App</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <ul className="navbar-nav ml-auto">
              <li className={navItemClass('home')}>
                <Link href="/">
                  <Nav.Link onClick={() => setActivedNavLink('home')}>
                    Home
                  </Nav.Link>
                </Link>
              </li>
              <li className={navItemClass('about')}>
                <Link href="/about">
                  <Nav.Link onClick={() => setActivedNavLink('about')}>
                    About
                  </Nav.Link>
                </Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
