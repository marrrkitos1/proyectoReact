import React, {useState} from 'react';

const Historial = ({selectPropiedad, selectUbicacion, inputMetros2, poliza}) => {
    const [nuevoHistorial, setNuevoHistorial] = useState([]);
    const historialLocal = JSON.parse(localStorage.getItem('historial')) || [];

    const nuevaCotizacion = {
        propiedad: selectPropiedad,
        ubicacion: selectUbicacion,
        metrosCuadrados: inputMetros2,
        poliza: poliza,
    };

    const nuevoHistorialActualizado = [...historialLocal, nuevaCotizacion];
    console.log(nuevoHistorial);

    return (
        <div className="div-historial">
            <h2 className="center separador">Historial de Cotizaciones</h2>
            <ul>
                {nuevoHistorial && nuevoHistorial.map((cotizacion, index) => (
                    <li key={index}>
                        Propiedad: {cotizacion.propiedad}, Ubicación: {cotizacion.ubicacion}, Metros Cuadrados: {cotizacion.metrosCuadrados}, Precio estimado: ${cotizacion.poliza}
                    </li>
                ))}
                <a className='btnBorrarHistorial'>🗑</a>
            </ul>
        </div>
    );
};

export default Historial;