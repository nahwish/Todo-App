import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FormContextProvider } from "./context/FormContext";
import { GetContextProvider } from './context/GetContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormContextProvider>
      <GetContextProvider>
    <App />
      </GetContextProvider>
    </FormContextProvider>
  </React.StrictMode>

);

