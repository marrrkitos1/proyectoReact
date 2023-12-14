import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import Historial from './components/Historial';

const historialRoot = document.querySelector('.historialRoot');

ReactDOM.createRoot(historialRoot).render(
    <Historial />
);