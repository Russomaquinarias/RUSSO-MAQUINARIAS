import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Legales from './pages/Legales';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'legales'

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page) => {
    if (page === 'legales') {
      setCurrentPage('legales');
    } else {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(page);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="App">
      <Navbar onNavigate={handleNavigate} />
      
      {currentPage === 'home' ? (
        <main>
          <div id="home">
            <Hero onNavigate={handleNavigate} />
          </div>
          <Catalog />
          <ContactForm onNavigate={handleNavigate} />
        </main>
      ) : (
        <Legales onNavigate={handleNavigate} />
      )}
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
