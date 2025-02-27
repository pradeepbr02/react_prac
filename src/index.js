import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import for React 18
import './index.css';  // Global styles
import App from './App';  // Your App component

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

