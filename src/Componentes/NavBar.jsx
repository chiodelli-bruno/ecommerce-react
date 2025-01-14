import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Mi E-commerce</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/electronics" className="nav-link">Electrónica</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/clothing" className="nav-link">Ropa</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/books" className="nav-link">Libros</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">Carrito</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

