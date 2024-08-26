
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

if (import.meta.env.APP_ENV === 'production') {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<Router>
			<App />
		</Router>
	);
} else {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<Router>
				<App />
			</Router>
		</React.StrictMode>
	);
}

async function enableMocking() {
  if (process.env.API_MOCKING !== "true") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});

