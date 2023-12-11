import React, { useState, useEffect } from 'react';
import Cotizador from './components/Cotizador.jsx';
import Historial from './components/Historial.jsx';
import './App.css';

const costoM2 = 35.86;

const App = () => {

  return (
    <div>
      <h1 className="titleSeguros">Seguros del hogar 🏡</h1>

      <Cotizador/>

      <Historial/>
    </div>
  );
};

const alerta = (mensaje) => {
  alert(`${mensaje}`);
};

const toast = () => {
  alert('Cotización guardada.');
};

export default App;
