import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import { DataProvider } from './Datacontext';
//import reportWebVitals from './reportWebVitals';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);

