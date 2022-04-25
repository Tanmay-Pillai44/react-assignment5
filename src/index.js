import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StudentsContext } from './components/StudentsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudentsContext>
      <App />
    </StudentsContext>
  </React.StrictMode>
);