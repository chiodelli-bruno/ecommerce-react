import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <svg className="logo-icon" viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-11-2h6v2H9V4zm11 16H4V8h16v12z"/>
          </svg>
          <span className="logo-text">Mi Tienda</span>
        </div>
        <ul className="navbar-menu">
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/ofertas">Ofertas</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;

