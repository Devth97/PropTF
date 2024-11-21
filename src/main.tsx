import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom'
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Use ReactDOM.render instead of createRoot
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement // Pass the rootElement as the second argument
);