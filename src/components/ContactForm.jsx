import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onNavigate }) => {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Debes aceptar la Política de Privacidad (Ley 25.326) para continuar.");
      return;
    }
    
    // El número de Russo Maquinarias que sacamos del pie de página
    const phoneNumber = "5493516562992";
    
    // Armamos el mensaje predefinido con los datos del formulario
    const text = `Hola Russo Maquinarias!\n\n*Nombre:* ${formData.nombre}\n*Teléfono:* ${formData.telefono}\n*Email:* ${formData.email}\n*Mensaje:* ${formData.mensaje}\n\n_(El usuario aceptó la Política de Privacidad)_`;
    
    // Codificamos el texto para que funcione en una URL
    const encodedText = encodeURIComponent(text);
    
    // Creamos el enlace a WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    // Abrimos WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
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
                <input type="text" name="nombre" required placeholder="Ej: Juan Pérez" value={formData.nombre} onChange={handleChange} />
              </div>
              
              <div className="form-group">
                <label>Teléfono / WhatsApp *</label>
                <input type="tel" name="telefono" required placeholder="+54 9 351..." value={formData.telefono} onChange={handleChange} />
              </div>
              
              <div className="form-group">
                <label>Email *</label>
                <input type="email" name="email" required placeholder="tuemail@ejemplo.com" value={formData.email} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Mensaje</label>
                <textarea name="mensaje" rows="4" placeholder="¿En qué maquinaria estás interesado?" value={formData.mensaje} onChange={handleChange}></textarea>
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
