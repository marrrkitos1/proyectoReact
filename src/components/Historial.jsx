import React from 'react';

const Historial = ({historial}) => {

    return (
        <div className="div-historial">
            <h2 className="center separador">Historial de Cotizaciones</h2>
            <ul>
                {historial.map((cotizacion, index) => (
                    <li key={index}>
                        Propiedad: {cotizacion.propiedad}, Ubicación: {cotizacion.ubicacion}, Metros Cuadrados: {cotizacion.metrosCuadrados}, Precio estimado: ${cotizacion.poliza}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Historial;
