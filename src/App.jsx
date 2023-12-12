  import React, { useState, useEffect} from 'react';
  import Cotizador from './components/Cotizador.jsx';
  import Historial from './components/Historial.jsx';
  import './styles/App.css';

  const App = () => {
    const [historial, setHistorial] = useState([]);
    const [btnEnviarVisible, setBtnEnviarVisible] = useState(false);

    useEffect(() => {
      const storedHistorial = JSON.parse(localStorage.getItem('historial')) || [];
      setHistorial(storedHistorial);
    }, []);

    useEffect(() => {
      localStorage.setItem('historial', JSON.stringify(historial));
    }, [historial]);

    return (
      <div className='container'>
        <div className="topDiv">
          <h1 className="titleSeguros">Seguros del hogar 🏡</h1>
          <a className='aHistorial'><h1 className="historial" title='Mostrar Historial'>📋</h1></a>
        </div>
        <div className="containerCotizador">
          <Cotizador
            setHistorial={setHistorial}
            setBtnEnviarVisible={setBtnEnviarVisible}
          />
        </div>
        {/* <div className="containerHistorial">
          <Historial
            historial={historial}
            btnEnviarVisible={btnEnviarVisible}
            setHistorial={setHistorial}
          />
        </div> */}
      </div>
    );
  };

  export default App;
