  import React from 'react';
  import Cotizador from './components/Cotizador.jsx';
  import Historial from './components/Historial.jsx';
  import './styles/App.css';

  const App = ({ selectPropiedad, selectUbicacion, inputMetros2, poliza}) => {

    return (
      <div className='container'>
        <div className="topDiv">
          <h1 className="titleSeguros">Seguros del hogar 🏡</h1>
          <h1 className="historial" title='Mostrar Historial'>📋</h1>
        </div>
        <div className="containerCotizador">
          <Cotizador
          />
          <Historial
            selectPropiedad={selectPropiedad}
            selectUbicacion={selectUbicacion}
            inputMetros2={inputMetros2}
            poliza={poliza}
          />
        </div>
      </div>
    );
  };

  export default App;
