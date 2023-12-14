  import React from 'react';
  import Cotizador from './Cotizador.jsx';
  import '../styles/cotizador.css';

  const App = () => {

    return (
      <div className='container'>
        <div className="topDiv">
          <h1 className="titleSeguros">Seguros del hogar 🏡</h1>
          <a href="./historial.html" className='verHistorial'><h1 className="historial" title='Mostrar Historial'>📋</h1></a>
        </div>
        <div className="containerCotizador">
          <Cotizador/>
        </div>
      </div>
    );
  };

  export default App;
