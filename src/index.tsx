import React from 'react';
import ReactDOM from 'react-dom/client';
import AppCalculator from './AppCalculator';

const root = ReactDOM.createRoot(
  document.getElementById('calculator-app') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppCalculator />
  </React.StrictMode>
);
