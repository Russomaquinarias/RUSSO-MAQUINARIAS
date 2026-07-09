import React from 'react';
import './Catalog.css';

const products = [
  {
    id: '01',
    name: 'ROBOT REVOCADOR AUTOMÁTICO RW-1200',
    description: 'Robot inteligente de revocado automático para paredes internas y externas. Máxima precisión, uniformidad y terminaciones profesionales.',
    kpi: ['8-10x Más Rápido', '90% Menos Mano de Obra', 'Ahorro del 60% en tiempo'],
    specs: ['Voltaje: 220V', 'Potencia: 1500W', 'Peso: 220 kg', 'Productividad: hasta 150 m²/h'],
    operarios: 'Reemplaza 4 a 6 operarios',
    ideal: 'Paredes interiores, Exteriores, Grandes obras',
    img: '/product-01.jpg'
  },
  {
    id: '02',
    name: 'PULVERIZADORA DE HORMIGÓN HP-711',
    description: 'Equipo eléctrico de proyección de hormigón seco o húmedo de alta presión y gran caudal. Ideal para túneles, piletas y fachadas.',
    kpi: ['5-7x Más Rápido', '70% Ahorro de Obra', 'Hormigón Uniforme y Compacto'],
    specs: ['Potencia: 9 KW', 'Peso: 360 kg', 'Caudal: 4-6 m³/h', 'Bomba de alto rendimiento'],
    operarios: 'Reemplaza 4 a 6 operarios',
    ideal: 'Túneles, Piletas, Fachadas',
    img: '/product-02.jpg'
  },
  {
    id: '03',
    name: 'PULVERIZADORA DE YESO MP-75',
    description: 'Proyecta yeso y enlucidos premezclados con uniformidad y velocidad. Ideal para interiores de alta calidad.',
    kpi: ['5x Más Rápido', '70% Ahorro en Mano de Obra', 'Acabado Fino y Sin Fisuras'],
    specs: ['Voltaje: 220V', 'Potencia: 5.5 kW', 'Caudal máx: 6 m³/h', 'Peso: 220 kg'],
    operarios: 'Reemplaza 1 a 2 operarios',
    ideal: 'Interiores, Yeso proyectado, Enlucidos',
    img: '/product-03.jpg'
  },
  {
    id: '04',
    name: 'ELECTRIC STAIR CHAIR ESC-160',
    description: 'Silla oruga eléctrica que sube y baja escaleras con seguridad y facilidad. Transporta personas o cargas pesadas sin esfuerzo.',
    kpi: ['100% Seguro', '1 Operador Suficiente', 'Ahorra Tiempo y Esfuerzo'],
    specs: ['Capacidad: 400 kg', 'Autonomía: hasta 90 pisos', 'Velocidad: 36 esc/min', 'Peso: 28 kg'],
    operarios: 'Reemplaza 2 a 3 operarios',
    ideal: 'Instalaciones, Sanitarios, Cargas Pesadas',
    img: '/product-04.jpg'
  },
  {
    id: '05',
    name: 'CORTADORA DE HORMIGÓN CSC-500',
    description: 'Sierra circular eléctrica de alta potencia para cortes rectos en hormigón, asfalto y materiales de construcción.',
    kpi: ['3x Más Rápido', 'Corte Preciso y Limpio', 'Mayor Durabilidad y Menor Esfuerzo'],
    specs: ['Potencia: 2800 W', 'Disco: 500 mm', 'Profundidad de corte: 190 mm', 'Peso: 11.5 kg'],
    operarios: 'Reemplaza 1 a 2 operarios',
    ideal: 'Pisos, Calles, Hormigón, Asfalto',
    img: '/product-05.jpg'
  },
  {
    id: '06',
    name: 'CORTADORA DE RANURAS CRW-4104',
    description: 'Realiza ranuras para instalaciones eléctricas, sanitarias y de climatización con 4 discos diamantados.',
    kpi: ['6-8x Más Rápido', 'Ranuras Limpias y Precisas', 'Menos Polvo y Esfuerzo'],
    specs: ['Potencia: 4200 W', 'Discos: 125 mm (4)', 'Ancho de ranura: 42 mm', 'Peso: 13 kg'],
    operarios: 'Reemplaza 2 a 3 operarios',
    ideal: 'Instalaciones Eléctricas, Sanitarias, Climatización',
    img: '/product-06.jpg'
  },
  {
    id: '07',
    name: 'ATADORA AUTOMÁTICA DE HIERROS WL-400',
    description: 'Atadora automática portátil para estructuras de acero. Ata rápido y firme, aumentando la productividad.',
    kpi: ['10x Más Rápido', 'Atado Uniforme y Firme', 'Batería de Larga Duración'],
    specs: ['Voltaje: 14.4 V', 'Diámetro de atado: 8-40 mm', 'Tiempo de atado: 0.8 s', 'Peso: 2.4 kg'],
    operarios: 'Reemplaza 1 a 2 operarios',
    ideal: 'Estructuras de Acero, Losas',
    img: '/product-07.jpg'
  },
  {
    id: '08',
    name: 'LIJADORA DE PARED DE BRAZO LARGO 225A-ZD',
    description: 'Lijadora eléctrica de brazo largo para paredes y techos. Acabados perfectos con mínimo esfuerzo y sin polvo.',
    kpi: ['5x Más Rápido', 'Acabado Uniforme y Profesional', 'Sistema de Aspiración Integrado'],
    specs: ['Potencia: 6500 W', 'Velocidad: 800-1800 rpm', 'Diámetro de lija: 225 mm', 'Peso: 4.5 kg'],
    operarios: 'Reemplaza 2 a 3 operarios',
    ideal: 'Paredes, Techos, Yeso, Enlucidos',
    img: '/product-08.jpg'
  }
];

const Catalog = () => {
  return (
    <section className="catalog" id="catalog">
      <div className="container">
        <div className="catalog-header">
          <h2 className="section-title">LÍNEA CONSTRUCCIÓN <span className="text-primary">INTELIGENTE</span></h2>
          <p className="catalog-subtitle">MÁQUINAS QUE CAMBIAN LA MANERA DE CONSTRUIR</p>
        </div>
        
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-image" style={{ backgroundImage: `url(${product.img})` }}>
                <div className="product-number">{product.id}</div>
              </div>
              
              <div className="product-content">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                
                <div className="product-details">
                  <div className="detail-section kpi-section">
                    <h4>MÁS RÁPIDO Y EFICIENTE</h4>
                    <ul>
                      {product.kpi.map((item, idx) => (
                        <li key={idx}><span className="text-primary">✓</span> {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-section spec-section">
                    <h4>ESPECIFICACIONES TÉCNICAS</h4>
                    <ul>
                      {product.specs.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="product-footer">
                  <div className="operarios-badge">
                    <strong>{product.operarios}</strong>
                  </div>
                  <div className="ideal-badge">
                    <strong>Ideal para:</strong> {product.ideal}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
