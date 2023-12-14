import React, { useState, useEffect } from 'react';
import CotizadorLogic from '../../public/js/CotizadorLogic';

const Cotizador = () => {
    const [selectPropiedad, setSelectPropiedad] = useState('...');
    const [selectUbicacion, setSelectUbicacion] = useState('...');
    const [inputMetros2, setInputMetros2] = useState(20);
    const [btnEnviarVisible, setBtnEnviarVisible] = useState(false);
    const [datos, setDatos] = useState([]);
    const [poliza, setPoliza] = useState();
    const cotizadorLogic = new CotizadorLogic(selectPropiedad, selectUbicacion, inputMetros2);

    const realizarCotizacion = () => {
        handleCotizacionFinalizada();
    };

    const handleCotizacionFinalizada = () => {
        setTimeout(() => {
            alert('Cotización realizada correctamente');
            setTimeout(() => {
                setPoliza(cotizadorLogic.cotizarPoliza());
                setBtnEnviarVisible(true);
            }, 500);
        }, 2500);
    };

    const guardarEnHistorialLocal = () => {
        const historialLocal = JSON.parse(localStorage.getItem('historial')) || [];

        const fechaActual = new Date();
        const fechaFormateada = fechaActual.toLocaleString();
    
        const nuevaCotizacion = {
            fecha: fechaFormateada,
            propiedad: selectPropiedad,
            ubicacion: selectUbicacion,
            metrosCuadrados: inputMetros2,
            poliza: poliza,
        };
    
        const nuevoHistorialLocal = ([...historialLocal, nuevaCotizacion]);
    
        localStorage.setItem('historial', JSON.stringify(nuevoHistorialLocal));
    };
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/js/datos.json');
                const datos = await response.json();
                setDatos(datos);
            } catch (error) {
                alert('Se ha producido un error. Intente nuevamente, por favor.');
                console.error('Se ha producido un error inesperado. Intente nuevamente por favor.', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='cotizador'>
            <div className='title'><p id='datosSolicitados'>Completa los datos solicitados</p></div>
            <div className="div-cotizador">
                <label htmlFor="propiedad" className='label'>Selecciona el tipo de propiedad</label>
                <select className='select'
                    id="propiedad"
                    onChange={(e) => {
                        setSelectPropiedad(e.target.value);
                    }}
                    value={selectPropiedad}
                >
                    <option disabled>...</option>
                    {datos.filter((dato) => dato.categoria === 'propiedad').map((elemento) => (
                        <option key={elemento.tipo} value={elemento.factor}>
                            {elemento.tipo}
                        </option>
                    ))}
                </select>
                <label htmlFor="ubicacion" className='label'>Selecciona su ubicación</label>
                <select className='select'
                    id="ubicacion"
                    onChange={(e) => {
                        setSelectUbicacion(e.target.value);
                    }}
                    value={selectUbicacion}
                >
                    <option disabled>...</option>
                    {datos.filter((dato) => dato.categoria === 'ubicacion').map((elemento) => (
                        <option key={elemento.tipo} value={elemento.factor}>
                            {elemento.tipo}
                        </option>
                    ))}
                </select>
                <label htmlFor="metros2" className='label'>Ingresa los Metros cuadrados:</label>
                <input className='select'
                    type="number"
                    id="metros2"
                    value={inputMetros2}
                    onChange={(e) => {
                        setInputMetros2(e.target.value);
                    }}
                    min="20"
                    max="500"
                    required
                />
                <div className="btnContainer">
                    <button onClick={realizarCotizacion} className='btnCotizar' alt='Cotizador'>Cotizar</button>
                </div>
                <div className="cotizacionResultado">
                    <p className='precioEstimado' alt='Poliza estimada'><strong>Precio estimado $ {poliza}</strong></p>
                    {btnEnviarVisible && <a onClick={guardarEnHistorialLocal} className='btnHistorial' title='Guardar en Historial' alt='Historial'>💾</a>}
                </div>
            </div>
        </div>
    );
};

export default Cotizador;