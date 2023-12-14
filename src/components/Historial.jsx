import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/historial.css';

const Historial = () => {
    const historialLocalActualizado = JSON.parse(localStorage.getItem('historial')) || [];
    const navigate = useNavigate();

    const borrarHistorial = () => {
        localStorage.clear();
        window.location.reload();
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
                    {historialLocalActualizado.map((nuevaCotizacion, index) => (
                        <tr key={index}>
                            <td>{nuevaCotizacion.fecha}</td>
                            <td>{nuevaCotizacion.propiedad}</td>
                            <td>{nuevaCotizacion.ubicacion}</td>
                            <td>{nuevaCotizacion.metrosCuadrados}</td>
                            <td>{nuevaCotizacion.poliza}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="funcionesAdicionales">
                <a className='btnBorrarHistorial' onClick={borrarHistorial}><i class="bi bi-trash3-fill"></i></a>
            </div>
        </div>
    );
};

export default Historial;
