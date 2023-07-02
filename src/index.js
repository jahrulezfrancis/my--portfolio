import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraBaseProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import Theme from './Components/Common/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraBaseProvider>
      <React.StrictMode>
        <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
        <App />
      </React.StrictMode>
    </ChakraBaseProvider>
  </BrowserRouter>
);
