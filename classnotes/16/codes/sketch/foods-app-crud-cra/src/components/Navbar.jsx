import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activedNavLink, setActivedNavLink] = useState('home');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Foods App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li
              className={
                activedNavLink === 'home' ? 'nav-item active' : 'nav-item '
              }
            >
              <Link
                to="/"
                className="nav-link"
                onClick={() => setActivedNavLink('home')}
              >
                Home
              </Link>
            </li>
            <li
              className={
                activedNavLink === 'about' ? 'nav-item active' : 'nav-item'
              }
            >
              <Link
                to="/about"
                className="nav-link"
                onClick={() => setActivedNavLink('about')}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
