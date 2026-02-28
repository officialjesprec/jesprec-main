
import React from 'react';
import ReactDOM from 'react-dom/client';
import { initSentry } from './lib/sentry.config';
import App from './App';
import './index.css';

// Initialize Sentry
initSentry('main');

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
