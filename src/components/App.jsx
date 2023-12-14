import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Cotizador from './Cotizador';
import Historial from './Historial';
import '../styles/cotizador.css';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <div className="topDiv">
          <h1 className="titleSeguros">Seguros del hogar</h1>
          <Link to='/' className='verHistorial' title='Ir a Home'>
            <h1 className="historial" title='Home'>
              🏡
            </h1>
          </Link>
          <Link to='/historial' className='verHistorial' title='Mostrar Historial'>
            <h1 className="historial" title='Ver Historial'>
              📋
            </h1>
          </Link>
        </div>
        <div className="containerCotizador">
          <Routes>
            <Route path="/" element={<Cotizador />} />
            <Route path="/historial" element={<Historial />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
