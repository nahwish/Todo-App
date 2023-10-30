import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FormContextProvider } from "./context/FormContext";
import { GetContextProvider } from './context/GetContext';
import { DeleteProvider } from './context/DeleteContext';
import { EditContextProvider } from './context/EditContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormContextProvider>
      <GetContextProvider>
      <DeleteProvider>
        <EditContextProvider>
    <App />

        </EditContextProvider>
      </DeleteProvider>

      </GetContextProvider>
    </FormContextProvider>
  </React.StrictMode>

);

