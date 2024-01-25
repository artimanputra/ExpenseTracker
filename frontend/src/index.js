import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Globalstyle } from './styles/GlobalStyle';
import { GlobalProvider } from './context/globalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Globalstyle />
    <GlobalProvider>
    <App />
    </GlobalProvider>
  </React.StrictMode>
);

