import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/historial.css';

const Historial = () => {
    const historialLocalActualizado = JSON.parse(localStorage.getItem('historial')) || [];
    const navigate = useNavigate();

    const borrarHistorial = () => {
        localStorage.clear();
        navigate('.', { replace: true });
    }

    return (
        <div className="div-historial">
            <h1 className="titleCotizaciones">Historial de Cotizaciones</h1>
            <table className="tabla">
                <thead className='tablaHead'>
                    <tr>
                        <th>Fecha de cotización</th>
                        <th>Propiedad</th>
                        <th>Ubicación</th>
                        <th>Metros cuadrados</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody className='tablaBody'>
                    {historialLocalActualizado.map((datosCotizacion, index) => (
                        <tr key={index}>
                            <td>{datosCotizacion.fecha}</td>
                            <td>{datosCotizacion.propiedad}</td>
                            <td>{datosCotizacion.ubicacion}</td>
                            <td>{datosCotizacion.metrosCuadrados}</td>
                            <td>{datosCotizacion.poliza}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="funcionesAdicionales">
                <a className='btnBorrarHistorial' onClick={borrarHistorial}><i className="bi bi-trash3-fill"></i></a>
            </div>
        </div>
    );
};

export default Historial;
