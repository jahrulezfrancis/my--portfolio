import React, { Component } from 'react';
import './App.css';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './Components/Homepage/Index';
import NavBar from './Components/Common/NavBar';

function App() {
  return (
    <Box className='app'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </Box>
  );
}

export default App;
