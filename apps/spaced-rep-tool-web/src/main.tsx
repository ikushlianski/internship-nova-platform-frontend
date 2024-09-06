
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import App from './App.tsx';
import "./globals.css";
import axios from "axios";


axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle 401 globally
      const navigate = useNavigate();
      console.error("Unauthorized: Redirecting to login");
      navigate('/login'); // Redirect to login page
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

async function enableMocking() {
  if (import.meta.env.VITE_API_MOCKING !== "true") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
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
  )
  );
});
