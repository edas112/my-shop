import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './variable.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './context/AppContext';
import AuthContextProvider from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
