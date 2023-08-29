import React from 'react';
import './Productos.css';
import medialunas from '../../assets/medialunaspoli.png';
import sandwich from '../../assets/sandwichpoli.png';
import torta from '../../assets/tortapoli.png';

const Productos = () => {
    return (
      <div className="productos-container">
        <div className="producto-item">
          <img src={medialunas} alt="Panificados" width="250%"/>
          <div className="producto-overlay">
            <span>Panificados</span>
          </div>
        </div>
        <div className="producto-item">
          <img src={sandwich} alt="Sandwich" width="250%"/>
          <div className="producto-overlay">
            <span>Sandwich</span>
          </div>
        </div>
        <div className="producto-item">
          <img src={torta} alt="Torta" width="250%"/>
          <div className="producto-overlay">
            <span>Torta</span>
          </div>
        </div>
      </div>
    );
  };

export default Productos;