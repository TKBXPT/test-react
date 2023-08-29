import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="column">
        <h2>Redes Sociales</h2>
        <a href="">Facebook</a>
        <a href="">Instagram</a>
        <a href="">Twitter</a>
      </div>
      <div className="column">
        <h2>Envios</h2>
        <p>Moto</p>
      </div>
      <div className="column">
        <h2>Informacion</h2>
        <a href="">Menu</a>
        <a href="">Contacto</a>
        <a href="">Quienes somos</a>
        
      </div>
      <div className="column">
        <h2>Phone</h2>
        
      </div>
    </footer>
  );
};

export default Footer;