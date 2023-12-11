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

    const fetchData = async () => {
        try {
            const response = await fetch('/js/datos.json');
            const datos = await response.json();
            setDatos(datos);
        } catch (error) {
            alerta('Se ha producido un error. Intente nuevamente, por favor.');
            console.error('Se ha producido un error inesperado. Intente nuevamente por favor.', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const realizarCotizacion = () => {
        if (cotizadorLogic.datosCompletos(selectPropiedad, selectUbicacion, inputMetros2)) {
            setPoliza(cotizadorLogic.cotizarPoliza());
            setBtnEnviarVisible(true);
        } else {
            alerta('Debes completar todos los datos en pantalla.');
        }
    };

    const alerta = (mensaje, icono) => {
        // Implementa lógica para alertas (puede ser con algún paquete de componentes como react-toastify)
    };

    const guardarEnHistorialLocal = () => {
        const cotizacion = {
            fechaCotizacion: new Date().toLocaleString(),
            propiedad: selectPropiedad,
            ubicacion: selectUbicacion,
            metrosCuadrados: inputMetros2,
            poliza: cotizadorLogic.cotizarPoliza(),
        };

        guardarEnHistorial(cotizacion);
        alerta('Cotización guardada.', 'success');
        setBtnEnviarVisible(false);
    };

    return (
        <>
        <div className='title'><h2 id='datosSolicitados'>Completa los datos solicitados</h2></div>
        <div className="div-cotizador">
            <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
            <select
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
            <label htmlFor="ubicacion">Selecciona su ubicación</label>
            <select
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
            <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
            <input
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
            <button onClick={realizarCotizacion}>Cotizar</button>
            <p>Precio estimado $ {poliza} {btnEnviarVisible && <button onClick={guardarHistorial}>💾</button>}</p>
            
        </div>
        </>
    );
};

export default Cotizador;
