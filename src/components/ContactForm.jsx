import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onNavigate }) => {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Debes aceptar la Política de Privacidad (Ley 25.326) para continuar.");
      return;
    }
    alert("Mensaje enviado correctamente. Nos pondremos en contacto a la brevedad.");
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-text">
            <h2 className="section-title">Asesoramiento <span className="text-primary">Personalizado</span></h2>
            <p>Dejanos tu consulta y uno de nuestros asesores comerciales se contactará contigo para brindarte la mejor solución para tu obra.</p>
            <ul className="contact-benefits">
              <li>✓ Aprobación rápida y simple de crédito</li>
              <li>✓ Consultá por planes a medida</li>
              <li>✓ Sin requisitos bancarios complicados</li>
            </ul>
          </div>
          
          <div className="contact-form-container glass">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Nombre y Apellido *</label>
                <input type="text" required placeholder="Ej: Juan Pérez" />
              </div>
              
              <div className="form-group">
                <label>Teléfono / WhatsApp *</label>
                <input type="tel" required placeholder="+54 9 351..." />
              </div>
              
              <div className="form-group">
                <label>Email *</label>
                <input type="email" required placeholder="tuemail@ejemplo.com" />
              </div>

              <div className="form-group">
                <label>Mensaje</label>
                <textarea rows="4" placeholder="¿En qué maquinaria estás interesado?"></textarea>
              </div>

              <div className="form-checkbox">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  checked={agreed} 
                  onChange={(e) => setAgreed(e.target.checked)} 
                />
                <label htmlFor="privacy">
                  Acepto la <button type="button" onClick={() => onNavigate('legales')} className="link-btn">Política de Privacidad y Tratamiento de Datos (Ley 25.326)</button> *
                </label>
              </div>

              <button type="submit" className="btn-primary w-100">Enviar Consulta</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
