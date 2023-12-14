import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/main.css';

const rootElement = document.querySelector('.root');

ReactDOM.createRoot(rootElement).render(
      <App />
);