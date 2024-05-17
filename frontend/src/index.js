import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductsContextProvider } from './context/ProductsContext';
import { CustomersContextProvider } from './context/CustomersContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <CustomersContextProvider>
        <App />
      </CustomersContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>
);