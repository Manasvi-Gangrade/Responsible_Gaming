// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Custom CSS for styling
import App from './App';

// React app ko render karna
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This links it to the div#root in index.html
);
