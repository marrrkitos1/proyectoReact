import React from 'react';
import ReactDOM from 'react-dom/client';
import Historial from './components/App';
import './styles/main.css';

const rootElement = document.querySelector('.historialRoot');

ReactDOM.createRoot(rootElement).render(
    <Historial />
);