import React from 'react';
import './Sucursal.css'; 
import sucursal from '../../assets/sucursal.jpg'; 

const Sucursal = () => {
  return (
    <div className="image-with-text-container">

      <div className="text-container">
        <div className="text-overlay">
          <h2>Visitanos en:</h2>
          <h3>Calle 11 Nro: 3310</h3>
          <h3>Calle 5 Nro: 558</h3>
          <h3>Calle 7 Nro: 295</h3>
          
          <p>Martes a Domingos: 08:00hs a 13:00hs - 16:00hs a 19:00hs </p>
        </div>
      </div>
      <div className="image-container">
        <img src={sucursal} alt="Imagen" />
      </div>
    </div>
  );
};

export default Sucursal;