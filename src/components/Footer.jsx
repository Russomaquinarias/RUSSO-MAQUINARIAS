import React from 'react';
import './Footer.css';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';

const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col">
          <div className="logo">
            <img src="/logo.jpeg" alt="Russo Maquinarias" className="logo-img" />
          </div>
          <p className="footer-slogan">Tecnología que construye el futuro.</p>
        </div>
        
        <div className="footer-col">
          <h3>Contacto</h3>
          <ul className="contact-info">
            <li><Phone size={18} className="text-primary" /> +54 351 6562992</li>
            <li><Mail size={18} className="text-primary" /> rusogino@yahoo.com</li>
            <li><MapPin size={18} className="text-primary" /> Córdoba, Argentina</li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Legales</h3>
          <ul className="legal-links">
            <li><button onClick={() => onNavigate('legales')}>Términos y Condiciones</button></li>
            <li><button onClick={() => onNavigate('legales')}>Política de Privacidad</button></li>
            <li><a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor" target="_blank" rel="noreferrer">Defensa del Consumidor</a></li>
          </ul>
        </div>

        <div className="footer-col afip-col">
          <div className="afip-placeholder">
            {/* Espacio reservado para el código QR de Data Fiscal AFIP/ARCA */}
            <p>Data Fiscal</p>
            <div className="qr-box">QR AFIP</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Russo Maquinarias. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
