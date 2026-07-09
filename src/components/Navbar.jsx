import React from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <div className="logo" onClick={() => onNavigate('home')}>
          <img src="/logo.jpeg" alt="Russo Maquinarias" className="logo-img" />
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <button onClick={() => { onNavigate('home'); setIsOpen(false); }}>Inicio</button>
          <button onClick={() => { onNavigate('catalog'); setIsOpen(false); }}>Catálogo</button>
          <button onClick={() => { onNavigate('contact'); setIsOpen(false); }}>Contacto</button>
        </div>

        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
