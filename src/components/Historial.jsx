import React, {useState} from 'react';
import Cotizador from '../components/Cotizador'

const Historial = ({btnEnviarVisible, selectPropiedad, selectUbicacion, inputMetros2, valorPoliza, guardarEnHistorial}) => {

    const handleGuardarEnHistorialLocal = () => {
        const cotizacion = {
            propiedad: selectPropiedad,
            ubicacion: selectUbicacion,
            metrosCuadrados: inputMetros2,
            poliza: valorPoliza,
        };

        setNuevoHistorial(cotizacion);
        mostrarAlerta('Cotización guardada.', 'success');
        setBtnEnviarVisible(false);

        // Mostrar el historial después de guardar
        toggleHistorialVisibility();
    };

    const mostrarAlerta = (mensaje) => {
        // Implementa lógica para mostrar alertas (puede ser con algún paquete de componentes como react-toastify)
        alert(mensaje);
    };

    return (
        <div className="div-historial">
            <h2 className="center separador">Historial de Cotizaciones</h2>
            {/* Renderiza tu historial de cotizaciones aquí, si lo tienes */}
            {/* ... */}
            <div className="center separador">
                <p className="importe">
                    Precio estimado: $ <span id="valorPoliza">{valorPoliza}</span>
                    <span
                        className={btnEnviarVisible ? 'guardar' : 'ocultar'}
                        onClick={handleGuardarEnHistorialLocal}
                        title="Guardar en historial"
                    >
                        💾
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Historial;
