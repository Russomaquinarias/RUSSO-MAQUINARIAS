import React from 'react';
import './Hero.css';

const Hero = ({ onNavigate }) => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">
          TECNOLOGÍA QUE <br /> <span className="text-primary">CONSTRUYE EL FUTURO</span>
        </h1>
        <p className="hero-subtitle">
          Línea Construcción Inteligente 2026/2027. Máquinas que cambian la manera de construir. Más productividad, menos costos y mejor calidad.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>MÁS RÁPIDO</h3>
            <p>Obras más eficientes</p>
          </div>
          <div className="stat-item">
            <h3>MENOS COSTOS</h3>
            <p>Ahorro en mano de obra</p>
          </div>
          <div className="stat-item">
            <h3>MEJOR CALIDAD</h3>
            <p>Terminaciones profesionales</p>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => onNavigate('catalog')}>Ver Catálogo</button>
          <button className="btn-outline" onClick={() => onNavigate('contact')}>Asesoramiento</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
