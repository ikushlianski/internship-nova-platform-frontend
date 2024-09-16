import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import './globals.css';

async function enableMocking() {
  if (import.meta.env.VITE_API_MOCKING !== 'true') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    import.meta.env.APP_ENV === 'production' ? (
      <Router>
        <App />
      </Router>
    ) : (
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    ),
  );
});