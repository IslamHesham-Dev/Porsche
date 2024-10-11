import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import './AuthPages.css';
import App from './App';
import { ProductsContextProvider } from './context/ProductsContext';
import { AuthContextProvider } from './context/AuthContext'
//import { CustomersContextProvider } from './context/CustomersContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);