import React from 'react';
import './Legales.css';

const Legales = ({ onNavigate }) => {
  return (
    <div className="legales-page">
      <div className="container">
        <button className="btn-outline back-btn" onClick={() => onNavigate('home')}>Volver al Inicio</button>
        
        <div className="legal-content">
          <h1>Políticas y Términos Legales</h1>
          
          <section className="legal-section">
            <h2>Términos y Condiciones Generales</h2>
            <p>Bienvenido al sitio web de Russo Maquinarias. El acceso y uso de este sitio web están sujetos a los siguientes Términos y Condiciones y a la legislación vigente en la República Argentina.</p>
            <p>La información, imágenes y especificaciones técnicas de las maquinarias presentadas en este sitio son de carácter informativo. Russo Maquinarias se reserva el derecho de modificar catálogos y especificaciones sin previo aviso.</p>
            <p>Dado que las transacciones comerciales no se perfeccionan a través de este sitio web (carácter informativo), el "Botón de Arrepentimiento" no resulta aplicable hasta que no se habilite una plataforma de comercio electrónico o pago directo.</p>
          </section>

          <section className="legal-section">
            <h2>Política de Privacidad y Tratamiento de Datos Personales (Ley 25.326)</h2>
            <p>En cumplimiento con la Ley N° 25.326 de Protección de Datos Personales de la República Argentina, Russo Maquinarias informa que:</p>
            <ul>
              <li>Los datos personales recabados a través de los formularios de contacto de este sitio web serán utilizados exclusivamente para dar respuesta a sus consultas y brindarle asesoramiento comercial.</li>
              <li>El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses.</li>
              <li>La Agencia de Acceso a la Información Pública, órgano de control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.</li>
              <li>Para ejercer sus derechos de acceso, rectificación, actualización o supresión, puede contactarnos a <strong>rusogino@yahoo.com</strong>.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Defensa de las y los Consumidores (Ley 24.240)</h2>
            <p>Russo Maquinarias cumple y promueve los derechos establecidos en la Ley de Defensa del Consumidor N° 24.240. Para mayor información o reclamos, puede acceder al portal oficial de la Dirección Nacional de Defensa del Consumidor: <a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor" target="_blank" rel="noreferrer" className="text-primary">www.argentina.gob.ar/produccion/defensadelconsumidor</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legales;
