import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraBaseProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraBaseProvider>
  </BrowserRouter>
);
