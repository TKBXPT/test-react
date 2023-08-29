import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
      <div className="nav-section" onClick={() => setActiveSection('columnas')}>
  Quienes somos
</div>
<div className="nav-section" onClick={() => setActiveSection('carrusel')}>
  Home
</div>
        <div className="nav-logo">
          <a href="/">Logo</a>
        </div>
        <div className="nav-section" onClick={() => setActiveSection('ofertas')}>
  Ofertas
</div>
<div className="nav-section" onClick={() => setActiveSection('sucursales')}>
  Sucursales
</div>
      </nav>
    </header>
  );
};

export default Header;